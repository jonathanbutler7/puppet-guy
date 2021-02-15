const imgUrl = 'https://res.cloudinary.com/dinz5dbwn/image/upload';

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

export { aboutTxt, aboutImgs };
