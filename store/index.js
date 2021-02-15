const imgUrl = 'https://res.cloudinary.com/dinz5dbwn/image/upload';

// thumbnail images
const sneeze = `${imgUrl}/v1613352707/puppets/images/THE_BIG_SNEEZE_amnbjy.png`;
const bugg = `${imgUrl}/v1613352708/puppets/images/BUGG-BUGGS_pl7gok.png`;
const bottle = `${imgUrl}/v1613352709/puppets/images/BOTTLE_HEAD_kspgf8.png`;
const first = `${imgUrl}/v1613352707/puppets/images/MY_FIRST_PUPPETS_nhkcy6.png`;
const simple = `${imgUrl}/v1613352710/puppets/images/Super_Simple_Pups_f3wwkt.png`;
const boydog = `${imgUrl}/v1613349012/samples/puppets/thumbnails/VIDEOS_BOY_DOG_Thumbnail_4_edpfyk.png`;

const thumbnails = [
  { img: sneeze, url: 'https://youtube.com' },
  { img: bugg, url: 'https://youtube.com' },
  { img: bottle, url: 'https://youtube.com' },
  { img: first, url: 'https://youtube.com' },
  { img: simple, url: 'https://youtube.com' },
  { img: boydog, url: 'https://youtube.com' },
];

// about
const aboutBuppets2 = `${imgUrl}/v1613356473/puppets/images/about/Buppets_2_Set_gu88rz.jpg`;
const aboutBuppets1 = `${imgUrl}/v1613356471/puppets/images/about/Buppets_1_white_outline_wthz8b.png`;
const arf = `${imgUrl}/v1613356472/puppets/images/about/Rod_Arf_Profile_l1dg0t.png`;
const johnK = `${imgUrl}/v1613356468/puppets/images/about/Trigger_Back_ga2kmm.jpg`;
const trigger = `${imgUrl}/v1613356468/puppets/images/about/Trigger_Front_xtuf2t.jpg`;
const aboutPix = [arf, johnK, trigger, aboutBuppets1, aboutBuppets2];

const abouttxt = `Hi! I’m Rod the Puppet Guy with a DID YOU KNOW about me and the puppets. Here we go!
DID YOU KNOW that my dad, John K. Butler, was a scriptwriter? One of his movies, “My Pal Trigger,” starred the singing cowboy, Roy Rogers.
DID YOU KNOW that I performed a bus character on TV for the Via Bus Company? We worked under a puppet-sized city set.
DID YOU KNOW that I was Bongo Rod on The Coconut Hut Radio Show? I did the voices for Bob Dah Lobstah, Coco, and Nutt.
And ... DID YOU KNOW that you can be a great puppeteer? All it takes is practice, imagination, and a desire to make people happy. And you can make puppets from stuff around the house. Check out my YouTube Channel, Rod The Puppet Guy, and get ready rock the world with your puppets!`;


// puppics 
const torkie = `${imgUrl}/v1613356891/puppets/images/puppics/PUP_PICS_Freemont_Torkie_lvnw3l.png`;
const tubes = `${imgUrl}/v1613356889/puppets/images/puppics/PUP_PICS_Two_Tube_Dudes_vykbxj.png`;
const flower = `${imgUrl}/v1613356887/puppets/images/puppics/PUP_PICS_Rod_Flower_vdqr6p.jpg`;
const pencil = `${imgUrl}/v1613356883/puppets/images/puppics/PUP_PICS_Smallest_Pup_pud1dh.jpg`;
const trunk = `${imgUrl}/v1613356882/puppets/images/puppics/PUP_PICS_Puppet_Trunk_ags1ns.jpg`;
const backyard = `${imgUrl}/v1613356882/puppets/images/puppics/PUP_PICS_Backyard_copy_ztg6wx.jpg`;
const puppicsPix = [torkie, tubes, flower, pencil, trunk, backyard];

const puppicstxt = `LEFT TO RIGHT: OK, that’s me from a long time ago, with my sidekick Flower. The two Tube Dudes are the tallest puppets I’ve made, and next to that is the smallest puppet I’ve made, built onto a toothpick. I named him Zigfreed. Next is the Backyard TV show. I performed Flower and the character coming out of the tree, Ruben Stein Rabbit, who would play classical music on a rabbit-sized toy piano. I drew a picture of my first two store-bought puppets, Freemont and Torkie. The last puppet pic is one most people don’t see, how the puppets look when they’re stuffed into the trunk, ready to head to the next puppet show!
`;


const contact = `
    <div class="contact">
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

const videos = thumbnails.map(
  (thumbnail) =>
    `<a href=${thumbnail.url} target='blank'>
        <img
          src=${thumbnail.img}
          alt=${thumbnail.img}
        />
      </a>`
);

const puppicsTxt = `
  <div class="puppics-text">
      <p>${puppicstxt}</p>
  </div>
`;

const puppicsImgs = puppicsPix.map(
  (pic) =>
    `<div class='puppics-images'>
      <img src=${pic} alt=${pic}>
    </div>`
);

const aboutTxt = `
  <div class="about-text">
      <p>${abouttxt}</p>
  </div>
`;
const aboutImgs = aboutPix.map(
  (pic) =>
    `<div class='about-images'>
      <img src=${pic} alt=${pic}>
    </div>`
);

export { contact, videos, aboutTxt, aboutImgs, puppicsTxt, puppicsImgs };
