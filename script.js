const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const form = document.getElementById('form');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

window.onload = function() {
   document.getElementById("form").reset();
};
