const projects = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel eros interdum, malesuada erat quis, rhoncus nibh. Nam egestas sit amet sapien facilisis sollicitudin. Pellentesque rutrum felis nisl, a ultricies eros semper in. Aenean lacus elit, hendrerit nec erat nec, consequat vestibulum nibh.',
    featured_image: './assets/img/projects-img1.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project1',
    source: 'https://github.com/jfoyarzo/Project1',
  },
  {
    title: 'Project 2',
    description:
      'Quisque congue vitae leo vitae accumsan. Sed porttitor tellus ac orci sodales, sed eleifend magna commodo. Integer sed cursus sapien. Donec tristique neque a viverra rutrum. Curabitur eget aliquam leo. Nullam sed lectus imperdiet quam congue rutrum volutpat vitae lorem.',
    featured_image: './assets/img/projects-img2.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project2',
    source: 'https://github.com/jfoyarzo/Project2',
  },
  {
    title: 'Project 3',
    description:
      'Vestibulum efficitur lorem massa, eget viverra elit hendrerit sed. Donec nec imperdiet augue. Nullam non leo quis dui convallis vulputate id sit amet lectus. Ut gravida mattis diam vitae facilisis. Integer ut rutrum orci. Donec tempus at lectus ut eleifend.',
    featured_image: './assets/img/projects-img3.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project3',
    source: 'https://github.com/jfoyarzo/Project3',
  },
  {
    title: 'Project 4',
    description:
      'Vestibulum efficitur lorem massa, eget viverra elit hendrerit sed. Donec nec imperdiet augue. Nullam non leo quis dui convallis vulputate id sit amet lectus. Ut gravida mattis diam vitae facilisis. Integer ut rutrum orci. Donec tempus at lectus ut eleifend.',
    featured_image: './assets/img/projects-img4.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project4',
    source: 'https://github.com/jfoyarzo/Project4',
  },
  {
    title: 'Project 5',
    description:
      'Nunc feugiat lorem lorem, sit amet molestie ipsum porta eget. Sed bibendum diam cursus, scelerisque lacus lacinia, viverra mauris. Nunc at purus semper, ullamcorper leo sed, feugiat risus. Nulla facilisi. Curabitur venenatis lorem egestas, iaculis est ac, vulputate velit.',
    featured_image: './assets/img/projects-img5.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project5',
    source: 'https://github.com/jfoyarzo/Project5',
  },
  {
    title: 'Project 6',
    description:
      'Quisque ante velit, tincidunt ac venenatis nec, rhoncus sed velit. Nam nulla metus, ultricies eu leo ac, auctor ultricies arcu. Suspendisse feugiat erat sit amet magna cursus tincidunt. Morbi scelerisque magna eget nunc egestas, sit amet porttitor mi commodo.',
    featured_image: './assets/img/projects-img6.png',
    technologies: ['HTML/CSS', 'Ruby on rails', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/Project6',
    source: 'https://github.com/jfoyarzo/Project6',
  },
];

const hamburger = document.querySelector('.menuIcon');
const closeX = document.querySelector('.closeIcon');
const dropdown = document.querySelector('.menu-wrapper');
const menuItems = document.querySelectorAll('.menu-item');
let cardContainer = document.querySelector('.grid-container');

const toggleMenu = () => {
  dropdown.classList.toggle('slide-in');
  hamburger.classList.toggle('hidden');
  closeX.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleMenu);
closeX.addEventListener('click', toggleMenu);
menuItems.forEach((e) => {
  e.addEventListener('click', toggleMenu);
});

let card = '';
for (let i = 0; i < projects.length; i++) {
  let li = '';
  let eachObj = projects[i];
  let tech = projects[i].technologies;
  for (let j = 0; j < tech.length; j++) {
    li += `
<li class="card-list-item">${tech[j]}</li>
`;
  }
  card += `
 <div class="card card${i + 1}">
            <div class="card-image image${i + 1}">
              <img src="${eachObj.featured_image}" alt="">
            </div>
            <div class="card-body">
              <h3 class="project-title">${eachObj.title}</h3>
              <ul class="card-list">
              ${li}
              </ul>
              <button type="button" class="card-btn">
                See this project &rarr;
              </button>
            </div>
          </div>
`;
}
cardContainer.innerHTML = card;
