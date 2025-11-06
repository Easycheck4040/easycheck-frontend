(async () => {
  const sb = await window.sbReady;

  // exige sessão para páginas internas
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { location.href = 'login.html'; return; }

  // config API + bearer
  window.API = 'https://api.easycheckglobal.com/api';
  window.AUTH = { token: session.access_token };

  const _fetch = window.fetch;
  window.fetch = (input, init = {}) => {
    try {
      const url = (typeof input === 'string') ? input : input.url;
      if (typeof url === 'string' && url.startsWith(window.API)) {
        init.headers = Object.assign({}, init.headers, { Authorization: `Bearer ${window.AUTH.token}` });
      }
    } catch {}
    return _fetch(input, init).then(res => {
      if (res.status === 401) location.href = 'login.html';
      return res;
    });
  };

  // bootstrap (cria empresa + vínculo no 1º login)
  try {
    const r = await fetch(`${window.API}/bootstrap`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${window.AUTH.token}` }
    });
    const out = await r.json();
    if (out?.ok && out.company_id) {
      window.COMPANY = out.company_id;
      localStorage.setItem('ec.company_id', out.company_id);
    }
  } catch(e) {
    console.warn('bootstrap skipped:', e);
  }

  // fallback (só para não quebrar layout se ainda não houver bootstrap)
  if (!window.COMPANY) {
    window.COMPANY = localStorage.getItem('ec.company_id') || '22871176-0909-4ba5-a642-5db70db2e35f';
  }
})();
