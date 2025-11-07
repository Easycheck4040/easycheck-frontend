// cookie-consent.js
(function(){
  const KEY = 'ec_cookie_consent';

  const get = () => {
    try { return JSON.parse(localStorage.getItem(KEY)||'{}'); } catch { return {}; }
  };
  const set = (v) => localStorage.setItem(KEY, JSON.stringify(v));

  const pref = get();
  if (pref && pref.essential) {
    // já existe consentimento (pelo menos essenciais) -> não mostra
    return;
  }

  // estilos mínimos
  const css = `
  .cc-wrap{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999}
  .cc-card{max-width:920px;margin:0 auto;background:#121520;border:1px solid #22283a;border-radius:12px;padding:14px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
  .cc-row{display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap}
  .cc-txt{color:#e6e8ef;line-height:1.45}
  .cc-actions{display:flex;gap:8px;flex-wrap:wrap}
  .cc-btn{background:#0A84FF;color:#fff;border:0;border-radius:10px;padding:10px 14px;font-weight:600;cursor:pointer}
  .cc-ghost{background:#1f2538}
  .cc-link{color:#9bbcff;text-decoration:none}
  .cc-link:hover{color:#cfe0ff}
  `;
  const style = document.createElement('style'); style.innerHTML = css; document.head.appendChild(style);

  // banner
  const wrap = document.createElement('div'); wrap.className = 'cc-wrap';
  wrap.innerHTML = `
    <div class="cc-card">
      <div class="cc-row">
        <div class="cc-txt">
          Usamos <b>cookies essenciais</b> para o site funcionar. “Analytics” é <b>opcional</b> e só será ativado se aceitares.
          <a class="cc-link" href="cookies.html">Saber mais / preferências</a>.
        </div>
        <div class="cc-actions">
          <button class="cc-btn cc-ghost" id="cc-only">Aceitar essenciais</button>
          <button class="cc-btn" id="cc-all">Aceitar todos</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  document.getElementById('cc-only').onclick = ()=>{
    set({ essential:true, analytics:false });
    wrap.remove();
  };
  document.getElementById('cc-all').onclick = ()=>{
    set({ essential:true, analytics:true });
    wrap.remove();
  };
})();
