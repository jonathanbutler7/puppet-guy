const url = 'https://res.cloudinary.com/dinz5dbwn/image/upload';
const sample = 'samples/puppets/thumbnails';
const sneeze = `${url}/v1613349015/samples/${sample}/VIDEOS_THE_BIG_SNEEZE_Thumbnail_oxtxev.png`;
const bugg = `${url}/v1613349015/samples/${sample}/VIDEOS_BUGG-BUGGS_Thumbnail_dk77of.png`;
const bottle = `${url}/v1613349014/samples/${sample}/VIDEOS_BOTTLE_HEAD_Thumbnail_2_b6zj7r.png`;
const first = `${url}/v1613349014/samples/${sample}/VIDEOS_MY_FIRST_PUPPETS_Thumbnail_ylmnld.png`;
const simple = `${url}/v1613349013/samples/${sample}/VIDEOS_Super_Simple_Pups_Thumbnail_cdwxbu.png`;
const boydog = `${url}/v1613349012/samples/${sample}/VIDEOS_BOY_DOG_Thumbnail_4_edpfyk.png`;

const thumbnails = [
  { img: sneeze, url: 'youtube.com' },
  { img: bugg, url: 'youtube.com' },
  { img: bottle, url: 'youtube.com' },
  { img: first, url: 'youtube.com' },
  { img: simple, url: 'youtube.com' },
  { img: boydog, url: 'youtube.com' },
];

export { thumbnails };
