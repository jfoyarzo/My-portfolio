const hamburger = document.querySelector('.menuIcon');
const closeX = document.querySelector('.closeIcon');
const dropdown = document.querySelector('#menu-wrapper');

const toggleMenu = () => {
  dropdown.classList.toggle('slide-in');
  hamburger.classList.toggle('hidden');
  closeX.classList.toggle('visible');
};

const buttonArr = [hamburger, closeX];
buttonArr.forEach((e) => {
  e.addEventListener('click', toggleMenu);
});
