
(function(){
  // Mobile nav
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // Update year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const onIntersect = (entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  };
  const io = new IntersectionObserver(onIntersect, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Stat counters
  const nums = document.querySelectorAll('.num[data-counter]');
  const format = n => (n % 1 === 0 ? n.toString() : n.toFixed(1));
  const runCounter = el => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const dur = 800; // ms
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / dur);
      const val = target * (0.2 + 0.8 * t * t); // ease
      el.textContent = format(val);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = format(target);
    };
    requestAnimationFrame(tick);
  };
  const numObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  nums.forEach(n => numObserver.observe(n));

  // Subtle tilt on hover for .lift cards
  const lifts = document.querySelectorAll('.lift');
  lifts.forEach(card => {
    let rect;
    const onMove = (e) => {
      rect = rect || card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-4px)`;
    };
    const reset = () => { card.style.transform = 'translateY(-2px)'; rect = null; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
    card.addEventListener('mouseenter', () => card.style.transition = 'transform .06s ease');
  });
})(); 
