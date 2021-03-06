import { puppicstxt, puppics } from '../constants/index.js';

const puppicsImgs = `
  <div style="display: flex;">
      <div class='puppics-images'>
        <div class='top-box'>
          <div class='left-box'>
          <div class='image-wrapper'>
            <img src=${puppics[0].img} alt=${puppics[0].alt}>
          </div>
          <div class='image-wrapper'>
            <img src=${puppics[1].img} alt=${puppics[1].alt}>
          </div>
          </div>
          <div style="flex: 1;">
            <img style="align-self: center;" src=${puppics[2].img} alt=${puppics[2].alt}>
          </div>
        </div>
        <img style="align-self: center; padding-bottom: 1rem;" src=${puppics[3].img} alt=${puppics[3].alt}>
        <img style="align-self: center; padding-bottom: 1rem;" src=${puppics[4].img} alt=${puppics[4].alt}>
        <img style="align-self: center; padding-bottom: 1rem;" src=${puppics[5].img} alt=${puppics[5].alt}>
      </div>
      <div class="puppics-text">
    <p>${puppicstxt}</p>
  </div>
      </div>
    `;

export { puppicsImgs };
