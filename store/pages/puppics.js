import { puppicstxt, puppics } from '../constants/index.js';

const puppicsImgs = `
  <div style="display: flex;">
      <div class='puppics-images'>
        <div style="display: flex;">
          <div style="flex: 1; padding: 0 1rem 1rem 0;">
            <img src=${puppics[0].img} alt=${puppics[0].alt}>
            <img src=${puppics[1].img} alt=${puppics[1].alt}>
          </div>
          <div style="flex: 1;">
            <img style="height: 85%" src=${puppics[2].img} alt=${puppics[2].alt}>
          </div>
        </div>
        <img style="padding-bottom: 1rem;" src=${puppics[3].img} alt=${puppics[3].alt}>
        <img style="padding-bottom: 1rem;" src=${puppics[4].img} alt=${puppics[4].alt}>
        <img style="padding-bottom: 1rem;" src=${puppics[5].img} alt=${puppics[5].alt}>
      </div>
      <div class="puppics-text">
    <p>${puppicstxt}</p>
  </div>
      </div>
    `;

export { puppicsImgs };
