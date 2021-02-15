import { abouttxt, aboutPix } from '../constants/index.js';

const aboutTxt = `
  <div class="about-text">
    <p>${abouttxt}</p>
  </div>
`;
const aboutImgs = aboutPix.map(
  (pic) =>
    `
    <div class='about-images'>
      <img src=${pic} alt=${pic}>
    </div>
    `
);

export { aboutTxt, aboutImgs };
