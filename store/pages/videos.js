import { thumbnails } from '../constants/index.js';

const videos = thumbnails.map(
  (thumbnail) =>
    `
    <a href=${thumbnail.url} target='blank'>
      <img
        src=${thumbnail.img}
        alt=${thumbnail.img}
      />
    </a>
    `
);

export { videos };
