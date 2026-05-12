const toggle = document.getElementById('dark-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark') html.classList.add('dark');

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});
