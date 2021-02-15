import {
  displayContact,
  displayVideos,
  displayAbout,
  displayPuppics,
} from './helpers.js';

function selectContact() {
  displayContact();
}
function selectVideos() {
  displayVideos();
}
function selectAbout() {
  displayAbout();
}
function selectPuppics() {
  displayPuppics();
}

$(document).ready(() => {
  selectVideos();
  selectAbout();
  selectPuppics();
  selectContact();
});
