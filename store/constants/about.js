import { imgUrl } from './cloudinary.js';

const arf = `${imgUrl}/v1613356472/puppets/images/about/Rod_Arf_Profile_l1dg0t.png`;
const trigger = `${imgUrl}/v1613356468/puppets/images/about/Trigger_Front_xtuf2t.jpg`;
const johnK = `${imgUrl}/v1613356468/puppets/images/about/Trigger_Back_ga2kmm.jpg`;
const buppets1 = `${imgUrl}/v1613356471/puppets/images/about/Buppets_1_white_outline_wthz8b.png`;
const buppets2 = `${imgUrl}/v1613356473/puppets/images/about/Buppets_2_Set_gu88rz.jpg`;
const coconut = `${imgUrl}/v1617054161/puppets/images/about/TCHRS_Pic_for_WS_uagsdh.jpg`;

const aboutPix = [
  { img: arf, alt: 'arf' },
  { img: johnK, alt: 'johnK' },
  { img: trigger, alt: 'trigger' },
  { img: buppets1, alt: 'buppets-1' },
  { img: buppets2, alt: 'buppets2' },
  { img: coconut, alt: 'coconut' },
];

const abouttxt = `Hi! I’m Rod the Puppet Guy with a DID YOU KNOW about me and the puppets. Here we go!
DID YOU KNOW that my dad, John K. Butler, was a scriptwriter? One of his movies, “My Pal Trigger,” starred the singing cowboy, Roy Rogers.
DID YOU KNOW that I performed a bus character on TV for the Via Bus Company? We worked under a puppet-sized city set.
DID YOU KNOW that I was Bongo Rod on The Coconut Hut Radio Show? I did the voices for Bob Dah Lobstah, Coco, and Nutt.
And ... DID YOU KNOW that you can be a great puppeteer? All it takes is practice, imagination, and a desire to make people happy. And you can make puppets from stuff around the house. Check out my YouTube Channel, Rod The Puppet Guy, and get ready rock the world with your puppets!`;

export { aboutPix, abouttxt };
