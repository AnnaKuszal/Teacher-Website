
/* TABLE OF CONTENTS */
/*

*/
//-------------------------------------------------------//

'use strict';

/* Rollout hidden list */

const rollup = document.querySelector('#rollup');
const rollupContent = document.querySelector('#rollup-content');

rollup.addEventListener('click', function() {
  rollupContent.classList.toggle('show');

  let rollupText = rollup.innerHTML;

  if (rollupText == 'ROZWIŃ') {
    rollup.innerHTML = 'ZWIŃ';
  }
  else {
    rollup.innerHTML = 'ROZWIŃ';
  }
});

/* Modal for images */

const modal = document.getElementById('modal');
const modalContentWrapper = document.getElementById('modal-content-wrapper');
const images = document.querySelectorAll('.skills .skills-box img');

for (let image of images) {
  let src = image.getAttribute('data-src');

  image.addEventListener('click', function() {
    let modalImg = document.createElement('img');
    modalImg.classList.add('modal-content');
    modalImg.setAttribute('src', src);
    modal.style.display = 'block';
    modalContentWrapper.appendChild(modalImg);
  });
}

const span = document.getElementsByClassName('m-close')[0];

span.onclick = function() {
  let modalImgActive = document.querySelector('.modal-content-wrapper img');
  modalImgActive.remove();
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

/* Activating navigation links */

const navLinks = document.getElementById('ul01').querySelectorAll('a');
let bodyWidthVal = document.body.clientWidth;
const openBtnNav = document.getElementById('openbtnNav');
const closeBtnNav = document.getElementById('closebtnNav');
const topNav = document.getElementById('ul01');
const topMenu = document.getElementById('top-menu');
let topMenuWidthVal = topMenu.clientWidth;

for (let navLink of navLinks) {
  navLink.addEventListener('click', function() {
    if (bodyWidthVal < 768 && topMenuWidthVal < 500) {
      topNav.classList.remove('show');
      openBtnNav.style.display = 'block';
      closeBtnNav.style.display = 'none';
    }

    for (let navLink of navLinks) {
      navLink.classList.remove('active');
    }

    navLink.classList.add('active');
    const idFromNavLink = navLink.getAttribute('href').replace('#', '');
    window.location.hash = idFromNavLink;
  });
}

const scrollStopElements = document.querySelectorAll('.scroll-stop');

window.onscroll = function() {
  const windowInnerHeight = window.innerHeight;

  for (let scrollStopElement of scrollStopElements) {
    const rectObjectTop = scrollStopElement.getBoundingClientRect().top;

    const scrollStopElementID = scrollStopElement.getAttribute('id');

    if ((rectObjectTop <= windowInnerHeight/2 && rectObjectTop >= 0) ||
       (rectObjectTop < windowInnerHeight-windowInnerHeight/4 && scrollStopElementID == 'footer')) {

      const scrollStopElementID = scrollStopElement.getAttribute('id');

      for (let navLink of navLinks) {
        navLink.classList.remove('active');
        const idFromNavLink = navLink.getAttribute('href').replace('#', '');

        if (scrollStopElementID == idFromNavLink) {
          navLink.classList.add('active');
        }
      }
    }
  }
};

/* Mobile navigation & buttons - show/hide */

openBtnNav.addEventListener('click', function() {
  topNav.classList.add('show');
  openBtnNav.style.display = 'none';
  closeBtnNav.style.display = 'block';
});

closeBtnNav.addEventListener('click', function() {
  topNav.classList.remove('show');
  closeBtnNav.style.display = 'none';
  openBtnNav.style.display = 'block';
});

/* Activating side menu links */

const sideMenuLinks = document.getElementById('ul02').querySelectorAll('a');
const openBtnMenu = document.getElementById('openbtnMenu');
const closeBtnMenu = document.getElementById('closebtnMenu');
const sideMenu = document.getElementById('ul02');
const resourcesMenu = document.getElementById('resources-menu');
const resMenuWidthVal = resourcesMenu.clientWidth;

const sideBtnClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  const activeChapters = document.querySelectorAll('.chapter.active');

  if (bodyWidthVal < 576 && resMenuWidthVal > 170) {
    sideMenu.classList.remove('show');
    openBtnMenu.style.display = 'block';
    closeBtnMenu.style.display = 'none';
  }

  for (let sideMenuLink of sideMenuLinks) {
    sideMenuLink.classList.remove('active');
  }

  clickedElement.classList.add('active');
  const idFromMenuLink = clickedElement.getAttribute('href').replace('#', '');
  window.location.hash = '#materials/' + idFromMenuLink;

  // Activate the right chapter
  for (let activeChapter of activeChapters) {
    activeChapter.classList.remove('active');
  }

  const chapterSelector = clickedElement.getAttribute('href');
  const targetChapter = document.querySelector(`#${chapterSelector}`);
  targetChapter.classList.add('active');

  //get activeNavLink
  const activeNavLink = document.querySelector('a.active');

  const activeNavLinkSectionSelector = activeNavLink.getAttribute('href');

  if (activeNavLinkSectionSelector !== '#materials') {
    for (let navLink of navLinks) {
      navLink.classList.remove('active');
      const navLinkSectionSelector = navLink.getAttribute('href');
      if (navLinkSectionSelector == '#materials') {
        navLink.classList.add('active');
      }
    }
  }
};

for (let sideMenuLink of sideMenuLinks) {
  sideMenuLink.addEventListener('click', sideBtnClickHandler);
}

/* Side menu & buttons - show/hide */

openBtnMenu.addEventListener('click', function() {
  sideMenu.classList.add('show');
  openBtnMenu.style.display = 'none';
  closeBtnMenu.style.display = 'block';
});

closeBtnMenu.addEventListener('click', function() {
  sideMenu.classList.remove('show');
  closeBtnMenu.style.display = 'none';
  openBtnMenu.style.display = 'block';
});

/* Activating content links */

const contentLinks = document.querySelectorAll('.content ol li a');

for (let contentLink of contentLinks) {
  contentLink.addEventListener('click', function() {
    contentLink.classList.add('active');
  });
}

/* Carousel content for @media (min-width: 320px)   if (bodyWidthVal < 576) */

if (bodyWidthVal < 576) {
  const colsWrapper = document.querySelector('.xs-recommended .row');
  const cardsAll = document.getElementById('carouselRecommended').querySelectorAll('.card');
  for (let card of cardsAll) {
    let col = document.createElement('div');
    col.classList.add('col', 'mb-4');
    let cardClone = card.cloneNode(true);    //cloning nodes
    col.appendChild(cardClone);
    colsWrapper.appendChild(col);
  }
}
