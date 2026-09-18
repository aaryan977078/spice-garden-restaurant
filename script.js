const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

if (btn && links) {
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}
