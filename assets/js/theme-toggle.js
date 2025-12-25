(function(){
  const STORAGE_KEY = 'theme-preference';
  const getPreference = () => localStorage.getItem(STORAGE_KEY);
  const setPreference = (v) => localStorage.setItem(STORAGE_KEY, v);

  const applyTheme = (theme) => {
    if(theme) document.documentElement.setAttribute('data-theme', theme);
    else document.documentElement.removeAttribute('data-theme');
  };

  const init = () => {
    const saved = getPreference();
    applyTheme(saved);

    // Add a minimal toggle if an element with id=theme-toggle exists
    const btn = document.getElementById('theme-toggle');
    if(btn){
      btn.addEventListener('click', function(){
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        setPreference(next);
      });
    }

    // IntersectionObserver reveal
    if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const obs = new IntersectionObserver((entries)=>{
        for(const e of entries){
          if(e.isIntersecting){
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        }
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    }
  };

  document.addEventListener('DOMContentLoaded', init);
})();
