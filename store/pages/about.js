import { abouttxt, aboutPix } from '../constants/index.js';

const aboutImgs = `
  <div class='about-container'>
    <div class='ok'>
      <img style="align-self: center" src=${aboutPix[1].img} alt=${aboutPix[1].alt} >
      <img style="align-self: center" src=${aboutPix[2].img} alt=${aboutPix[2].alt} >
    </div>
    <div class='ok'>
      <img src=${aboutPix[3].img} alt=${aboutPix[3].alt} >
      <img src=${aboutPix[4].img} alt=${aboutPix[4].alt} >
      </div>
    <div style="max-width: 800px; margin: auto;">
      <img src=${aboutPix[5].img} alt=${aboutPix[5].alt} >
    </div>
  </div>
`;

const aboutTxt = `
<div class="about-text">
  <img id='arf' src=${aboutPix[0].img} alt=${aboutPix[0].alt} >
    <p>Hi! I’m Rod the Puppet Guy with a DID YOU KNOW about me and the puppets. Here we go!</p>
    <p>DID YOU KNOW that my dad, John K. Butler, was a scriptwriter? One of his movies, “My Pal Trigger,” starred the singing cowboy, Roy Rogers.</p>
    <p>DID YOU KNOW that I performed a bus character on TV for the Via Bus Company? We worked under a puppet-sized city set.</p>
    <p>DID YOU KNOW that I was Bongo Rod on The Coconut Hut Radio Show? I did the voices for Bob Dah Lobstah, Coco, and Nutt.</p>
    <p>And ... DID YOU KNOW that you can be a great puppeteer? All it takes is practice, imagination, and a desire to make people happy. And you can make puppets from stuff around the house. Check out my YouTube Channel, Rod The Puppet Guy, and get ready rock the world with your puppets!</p>
  
  </div>
  
`;

export { aboutTxt, aboutImgs };
