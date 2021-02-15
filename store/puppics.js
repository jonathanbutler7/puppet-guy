const imgUrl = 'https://res.cloudinary.com/dinz5dbwn/image/upload';

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

export { puppicsTxt, puppicsImgs };
