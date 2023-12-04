const root = document.documentElement;
root.className = 'blue';

function setTheme() {
    const newTheme = root.className === 'blue' ? 'pink' : 'blue';
    root.className = newTheme;
  }
  
document.querySelector('.theme-toggle').addEventListener('mouseenter', setTheme)