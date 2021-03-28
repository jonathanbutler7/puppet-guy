import { videos } from './store/index.js';
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

function start() {
  $('.videos').html(videos);
  $('.videos').show();
  $('.contact').hide();
  $('.about').hide();
  $('.puppics').hide();
  $('#videos').addClass('selected');
  $('#about').removeClass('selected');
  $('#puppics').removeClass('selected');
  $('#contact').removeClass('selected');
}

$(document).ready(() => {
  select();
  start();
});
