/**
 * GAURAV KATARE - PORTFOLIO INTERACTIVITY & THEME ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollSpy();
  initProjectFilters();
  initCopyButtons();
  initBibtexModal();
});

/* ── 1. Theme Toggle Engine ── */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('gk_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('gk_theme', nextTheme);
  });
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeButton(true);
  } else {
    document.documentElement.removeAttribute('data-theme');
    updateThemeButton(false);
  }
}

function updateThemeButton(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const label = btn.querySelector('.theme-label');
  const icon = btn.querySelector('.theme-icon');
  
  if (isDark) {
    if (label) label.textContent = 'Light Mode';
    if (icon) icon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  } else {
    if (label) label.textContent = 'Dark Mode';
    if (icon) icon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  }
}

/* ── 2. ScrollSpy Navigation ── */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  const sections = Array.from(navLinks).map(link => {
    const target = document.querySelector(link.getAttribute('href'));
    return { link, target };
  }).filter(item => item.target !== null);

  function onScroll() {
    const scrollPos = window.scrollY + 120;
    
    let current = null;
    for (const item of sections) {
      if (item.target.offsetTop <= scrollPos) {
        current = item;
      }
    }

    navLinks.forEach(l => l.classList.remove('active'));
    if (current) {
      current.link.classList.add('active');
    } else if (navLinks.length > 0) {
      navLinks[0].classList.add('active');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 3. Project Filter Tabs ── */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(6px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ── 4. Copy Email & Quick Links ── */
function initCopyButtons() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'kataregaurav1501@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalHtml = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<span style="color:var(--link); font-weight:600; font-size:0.75rem;">Copied!</span>`;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalHtml;
        }, 2000);
      });
    });
  }
}

/* ── 5. BibTeX Modal ── */
function initBibtexModal() {
  const openBtns = document.querySelectorAll('[data-open-bibtex]');
  const modal = document.getElementById('bibtex-modal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.modal-close');
  const copyBtn = document.getElementById('copy-bibtex-btn');
  const codeBlock = modal.querySelector('.bibtex-code');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  if (copyBtn && codeBlock) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        copyBtn.textContent = 'Copied BibTeX!';
        setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 2000);
      });
    });
  }
}
