
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
