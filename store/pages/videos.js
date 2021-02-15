import { thumbnails } from '../images/videos';

const videos = thumbnails.map(
  (thumbnail) =>
    `<a href=${thumbnail.url} target='blank'>
      <img
        src=${thumbnail.img}
        alt=${thumbnail.img}
      />
    </a>`
);

export { videos };
