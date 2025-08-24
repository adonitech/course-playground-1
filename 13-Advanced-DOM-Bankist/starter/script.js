'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
// Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log('section', s1coords.top);

  // getBoundingClientRect is relative to the viewport
  // e.target === btnScrollTo
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // s1coords is how far is the section from the viewport and then we calculate how much we scrolled and when we add those numbers it must give us how the section is far from the top in the DOCUMENT or PAGE not relative to the viewport(IDK)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // to make it smooth we need to pass it like obj and specify the behavior to smooth
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way of doing scrolling and might not work on old browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // the problem is if we click on span we get the span but with closest it would find the closest with specified class parent w/c is our button and when we click on button the closest would be itself b/c the button itself has a class of operations__tab
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Clearing in all of them and then only add it afterwards on one of them
  // remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  tabsContent.forEach(tContent =>
    tContent.classList.remove('operations__content--active')
  );
  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////
///////////////////////////////////////////
// Lectures
/*
console.log(document.documentURI);
console.log(document.domain);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1').children);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
console.log(message);
message.classList.add('cookie-message');
message.innerHTML =
  '<p>We use cookied for improved functionality.</p> <button class="btn btn--close--cookie">Got it!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true)); cloning it

// as a sibling meaning that before or after the header element
// header.before(message);
// header.after(message);

// Delete Elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
// logo.setAttribute(attribute name, attribute value)
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

// The relative URL
console.log(logo.getAttribute('src'));
// The absolute URL
console.log(logo.src);

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// in html data-version-number="3.0" in js logo.dataset.versionNumber  SPOT THE camelCase
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');


/////////////////////////////
// types of events

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('add: great');

  // h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: great');
// };

// READ This is what it looks like using the onclick and no need to define function keyword
//  <h1 onclick="alert('Adoni')"> 

///////////////////////////////////////
// Event Propagation in practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);

  // Stop Propagation
  // e.stopPropagation();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
});

// Summary - Event Propagation
// e.target is where the event happened not the event attached to and if you look at the above eventHandlers you see that e.target is the same in each of them and that is b/c the event happened on .nav__link so e.target point to that.
// the others got the same event because of bubbling but we can prevent that from happening using e.stopPropagation() and
// event moving up and downs or from capture phase(1) to target phase(2) then bubbling phase(3) is called Propagation

// if we want to catch events in capturing phase and we need 3rd parameter set to true in eventhandler function
// if set it to true then it will disable the bubbling phase

*/

///////////////////////////////////////////
//
const h1 = document.querySelector('h1');
//////////
// Going downwards: child
// No matter how deep the highlight class is it will be selected
// and if other elements has highlight class but not child of h1 and then they won't be selected
console.log(h1.querySelectorAll('.highlight'));

// returns nodeList
console.log(h1.childNodes);
console.log(document.querySelector('.header__title').childNodes);
// returns HTMLColleciton and give us the elements so better to use children && READ ONLY for DIRECT CHILDREN won't dive deep
console.log(h1.children);
console.log(document.querySelector('.header__title').children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

////////
// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
// closest method finds a PARENT that match the argument string no matter how far up in the dom tree while the querySelector finds a CHILD

////////////
// Going sideways: Siblings
// Only next and previous elements get choosen
console.log(h1.previousElementSibling); // null b/c NO previous element defined
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// to choose its other siblings we can use this trick
// moving up to the parent Element and then access its siblings but this will include itself
//READ HTML collection is iterable
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
