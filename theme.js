// Theme Toggle - Light/Dark Mode
(function () {
  const STORAGE_KEY = 'jw-theme';
  const root = document.documentElement;

  // Apply theme immediately to prevent flash
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  root.setAttribute('data-theme', savedTheme);

  function createToggleButton() {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle light/dark mode');
    btn.innerHTML = `
      <span class="theme-icon theme-icon--sun">☀️</span>
      <span class="theme-icon theme-icon--moon">🌙</span>
    `;
    document.body.appendChild(btn);
    updateButton(btn, root.getAttribute('data-theme'));
    return btn;
  }

  function updateButton(btn, theme) {
    btn.setAttribute('data-theme-btn', theme);
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateButton(document.getElementById('theme-toggle'), next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = createToggleButton();
    btn.addEventListener('click', toggleTheme);
  });
})();