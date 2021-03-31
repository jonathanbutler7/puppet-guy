import { cloud, email } from '../constants/index.js';

const contact = `
    <div class="contact-page">
      <img
        src=${cloud}
        alt="cloud"
        id="contact-cloud"
      />
      <h4>
        CONTACT: <br />
        <a href="mailto:${email}">
          ${email}
        </a>
      </h4>
    </div>
  `;

export { contact };
