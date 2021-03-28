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

function select() {
  selectVideos();
  selectAbout();
  selectPuppics();
  selectContact();
}

$(document).ready(() => {
  select();
});
