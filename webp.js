/* global require, process */

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['src/images/smJpg/*.{jpg,png}'], {
  destination: 'src/images/converted/',
  plugins: [
    imageminWebp({
      quality: 75
    })
  ]
}).then(() => {
  console.log('Images optimized');
});
