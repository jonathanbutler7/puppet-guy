const url = 'https://res.cloudinary.com/dinz5dbwn/image/upload';
const sneeze = `${url}/v1613349015/samples/puppets/thumbnails/VIDEOS_THE_BIG_SNEEZE_Thumbnail_oxtxev.png`;
const bugg = `${url}/v1613349015/samples/puppets/thumbnails/VIDEOS_BUGG-BUGGS_Thumbnail_dk77of.png`;
const bottle = `${url}/v1613349014/samples/puppets/thumbnails/VIDEOS_BOTTLE_HEAD_Thumbnail_2_b6zj7r.png`;
const first = `${url}/v1613349014/samples/puppets/thumbnails/VIDEOS_MY_FIRST_PUPPETS_Thumbnail_ylmnld.png`;
const simple = `${url}/v1613349013/samples/puppets/thumbnails/VIDEOS_Super_Simple_Pups_Thumbnail_cdwxbu.png`;
const boydog = `${url}/v1613349012/samples/puppets/thumbnails/VIDEOS_BOY_DOG_Thumbnail_4_edpfyk.png`;

const contact = `<div class="contact">
          <img
            src="https://res.cloudinary.com/dinz5dbwn/image/upload/v1613345823/samples/puppets/CONTACT_Cloud_bgidg4.png"
            alt="cloud"
            id="contact-cloud"
          />
          <h4>
            CONTACT: <br />
            <a href="mailto:info@rodthepuppetguy.com">
              info@rodthepuppetguy.com</a
            >
          </h4>
        </div>
        `;

const thumbnails = [sneeze, bugg, bottle, first, simple, boydog];

const videos = thumbnails.map(
  (thumbnail) =>
    `<a href="">
            <img
              src=${thumbnail}
              alt=""
            />
          </a>`
);

export { contact, videos };
