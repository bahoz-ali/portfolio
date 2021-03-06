const menuButton = document.getElementById('menu');
const navList = document.getElementsByClassName('nav-list')[0];
const xButton = document.getElementsByClassName('bi-x-lg')[0];
const navItems = document.getElementsByClassName('nav__item');
const hero = document.getElementsByClassName('hero')[0];
const logo = document.getElementsByClassName('logo')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const closeWindow = document.getElementsByClassName('close_window')[0];
const lookProjectButtons = document.querySelectorAll('.see_project');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameInput = document.getElementById('name');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form_status');

const projects = [
  {
    id: 0,
    title: 'Tonic',
    role: 'Fullstack Dev',
    year: '2013',
    companyName: 'FACEBOOK',
    desktopImg: './images/popup_cards/work1-lg.png',
    mobileImg: './images/works/work1.png',
    projectLiveUrl: '#',
    sourceCodeUrl: '#',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    id: 1,
    title: 'Uber Navigation',
    companyName: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    mobileImg: './images/works/work2.png',
    desktopImg: './images/popup_cards/work3-lg.png',
    sourceCodeUrl: '#',
    projectLiveUrl: '#',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    id: 2,
    title: 'Tonic',
    companyName: 'CANOPY',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    mobileImg: './images/works/work5.png',
    desktopImg: './images/popup_cards/work2-lg.png',
    sourceCodeUrl: '#',
    projectLiveUrl: '#',
    role: 'Fullstack Dev',
    year: '2013',
  },
  {
    id: 3,
    title: 'Multi-PostStories',
    companyName: 'FACEBOOK',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    mobileImg: './images/works/work4.png',
    desktopImg: './images/popup_cards/work4-lg.png',
    sourceCodeUrl: '#',
    projectLiveUrl: '#',
    role: 'Full Stack Dev',
    year: '2015',
  },
];

function stopScroll() {
  document.body.style.overflowY = 'hidden';
}

function enableScroll() {
  document.body.style.overflowY = 'auto';
}

function blur(number) {
  hero.style.filter = `blur(${number}px)`;
  logo.style.filter = `blur(${number}px)`;
}

function closeMobileMenu() {
  blur(0);
  navList.classList.remove('nav--open');
  menuButton.classList.remove('menu--close');
  xButton.classList.remove('xopen');
  enableScroll();
}

function openMenu() {
  navList.classList.add('nav--open');
  menuButton.classList.add('menu--close');
  stopScroll();
  xButton.classList.add('xopen');
  blur(7);
}

menuButton.addEventListener('click', openMenu);

xButton.addEventListener('click', closeMobileMenu);

Array.from(navItems).forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

function openProject(id) {
  const {
    title,
    companyName,
    year,
    role,
    desktopImg,
    mobileImg,
    description,
    sourceCodeUrl,
    projectLiveUrl,
  } = projects[id];

  overlay.classList.add('overlay--active');
  stopScroll();

  document.querySelector('.work--popup .title').innerHTML = title;
  document.querySelector('.work--popup .content').innerHTML = description;
  document.querySelector('.work--popup .info__name').innerHTML = companyName;
  document.querySelector('.work--popup .info__job').innerHTML = role;
  document.querySelector('.work--popup .info__year').innerHTML = year;
  document.querySelector('.work--popup #img_mobile').src = mobileImg;
  document.querySelector('.work--popup #img_large').src = desktopImg;
  document.querySelector('.work--popup #sourceCode').href = sourceCodeUrl;
  document.querySelector('.work--popup #projectLive').href = projectLiveUrl;
}

function closeProject() {
  enableScroll();
  overlay.classList.remove('overlay--active');
}

closeWindow.addEventListener('click', closeProject);

lookProjectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = button.dataset.id;
    openProject(projectId);
  });
});

// form validation
function isEmailLowerCase(email = '') {
  const lowerCaseEmail = email.toLowerCase();

  if (email === lowerCaseEmail && email.includes('@')) return true;

  return false;
}

async function sendData(event) {
  const data = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { Accept: 'application/json' },
  });

  return response;
}

async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await sendData(event);

    if (response.ok && isEmailLowerCase(emailInput.value)) {
      formStatus.innerHTML = 'Thanks for your submission!';
      formStatus.classList.remove('invalid');
      formStatus.classList.add('valid');
      form.reset();
    } else {
      formStatus.classList.add('invalid');
      formStatus.innerHTML = 'Oops!, Email should be in lower case and valid';
    }
  } catch (error) {
    formStatus.classList.add('invalid');
    formStatus.innerHTML = 'Oops!, Email should be in lower case and valid';
    formStatus.innerHTML = 'Oops! There was a problem submitting your form';
  }

  // removing the information after 5 second.
  setTimeout(() => {
    formStatus.innerHTML = '';
    formStatus.classList.remove('invalid', 'valid');
  }, 5000);
}

form.addEventListener('submit', handleSubmit);

// local storage
function setData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

function getData(key = 'userData') {
  return JSON.parse(localStorage.getItem(key));
}

function init() {
  if (!getData('userData')) {
    const data = { name: '', email: '', message: '' };
    setData(data);
  }
}

function fillForm() {
  if (getData('userData')) {
    const { name, email, message } = getData('userData');

    nameInput.value = name;
    emailInput.value = email;
    messageInput.innerText = message;
  }
}

function handleChange(event) {
  const { name, value } = event.target;

  const data = getData('userData');
  data[name] = value;

  setData(data);
}

emailInput.addEventListener('change', handleChange);
nameInput.addEventListener('change', handleChange);
messageInput.addEventListener('change', handleChange);

document.addEventListener('DOMContentLoaded', () => {
  init();
  fillForm();
});
