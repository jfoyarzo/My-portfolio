const projects = [
  {
    title: 'Capstone Project for first module at Microverse',
    description: 'The first Capstone Project of the Microverse curriculum. The site consists of a homepage and an about page. The event is a fictional web development summit. The layout of the elements has been made using a mixture of SCSS and Bootstrap 5 for responsiveness. Animations and transitions made with CSS. JavaScript used for user interactions and dynamically generated content. Built With HTML5, SCSS, Bootstrap 5, and JavaScript',
    featured_image: './assets/img/capstoneProject_1.png',
    technologies: ['HTML5', 'SCSS', 'Bootstrap 5', 'Javascript'],
    live_version: 'https://jfoyarzo.github.io/capstone1-WebdevSummit/index.html',
    source: 'https://github.com/jfoyarzo/capstone1-WebdevSummit',
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
const cardContainer = document.querySelector('.grid-container');

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

for (let i = 0; i < projects.length; i += 1) {
  const cardDiv = document.createElement('div');
  cardDiv.className = `card card${i + 1}`;
  let li = '';
  const eachObj = projects[i];
  const tech = projects[i].technologies;
  for (let j = 0; j < tech.length; j += 1) {
    li += `
<li class="card-list-item">${tech[j]}</li>
`;
  }
  cardDiv.innerHTML = `
          <div class="card-image image${i + 1}">
              <img src="${eachObj.featured_image}" alt="">
            </div>
            <div class="card-body">
              <h3 class="project-title">${eachObj.title}</h3>
              <ul class="card-list">
              ${li}
              </ul>
              <button myIndex=${i} type="button" class="card-btn">
                See this project &rarr;
              </button>
          </div>
`;
  cardContainer.append(cardDiv);
}

const modal = document.querySelector('.modal');

const showModal = () => {
  const btn = document.querySelectorAll('.card-btn');
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      const index = e.getAttribute('myIndex');
      modal.classList.toggle('hidden');
      const tech = projects[index].technologies;
      let li = '';
      for (let i = 0; i < tech.length; i += 1) {
        li += `
<li class="modal-list-item">${tech[i]}</li>
`;
      }
      modal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <span class="closeModal"><i class="fa-solid fa-xmark fa-2xl"></i></span>
        <h2>${projects[index].title}</h2>
        <ul class="modal-list">
          ${li}
        </ul>
      </div>
      <div class="modal-body">
        <img src="${projects[index].featured_image}" alt="Project image">
        <p>${projects[index].description}</p>
        <div class="button-wrapper">
          <button type="button" onclick="window.open('${projects[index].live_version}','_blank');" class="modal-button">See live<i class="fa-solid fa-arrow-up-right-from-square"
              data-fa-transform="grow-15 right-100"></i></button><button type="button" onclick="window.open('${projects[index].source}','_blank');" class="modal-button">See source<i
              class="modal-icon fa-brands fa-github" data-fa-transform="grow-15 right-90"></i></button>
        </div>
        <div class="projects-navigation">
          <span><i class="fa-solid fa-arrow-left-long"></i> Previous Project </span><span>Next Project <i class="fa-solid fa-arrow-right-long"></i></span>
        </div>
      </div>
    </div>`;
      const close = document.querySelector('.closeModal');
      close.addEventListener('click', () => modal.classList.toggle('hidden'));
    });
  });
};
showModal();

const error = document.querySelector('.errorMsg');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('.contact-form');

submitBtn.addEventListener('click', (e) => {
  const regEx = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  const email = document.querySelector('#email').value;

  if (email.match(regEx)) {
    form.submit();
  } else {
    e.preventDefault();
    error.innerHTML = 'Please enter a valid email adress in lowercase letters only';
  }
});

const inputs = form.elements;
const formArray = [inputs[1], inputs[3], inputs[5]];
formArray.forEach((e) => {
  e.addEventListener('change', () => {
    const formObj = {
      name: formArray[0].value,
      email: formArray[1].value,
      message: formArray[2].value,
    };
    localStorage.setItem('formValues', JSON.stringify(formObj));
  });
});

window.addEventListener('load', () => {
  const formInfo = JSON.parse(localStorage.getItem('formValues'));
  if (formInfo) {
    inputs[1].value = formInfo.name;
    inputs[3].value = formInfo.email;
    inputs[5].value = formInfo.message;
  } else {
    inputs[1].value = '';
    inputs[3].value = '';
    inputs[5].value = '';
  }
});
