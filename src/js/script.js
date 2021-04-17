
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
