const hamburger = document.querySelector('.menuIcon');
const closeX = document.querySelector('.closeIcon');
const dropdown = document.querySelector('.menu-wrapper');

const toggleMenu = () => {
  dropdown.classList.toggle('slide-in');
  hamburger.classList.toggle('hidden');
  closeX.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleMenu);
closeX.addEventListener('click', toggleMenu);
