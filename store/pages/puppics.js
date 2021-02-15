import { puppicstxt, puppics } from '../constants/index.js';

const puppicsTxt = `
  <div class="puppics-text">
    <p>${puppicstxt}</p>
  </div>
`;

const puppicsImgs = puppics.map(
  (pic) =>
    `
    <div class='puppics-images'>
      <img src=${pic} alt=${pic}>
    </div>
    `
);

export { puppicsTxt, puppicsImgs };
