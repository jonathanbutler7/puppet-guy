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
  toggleMenu();
}

function start() {
  $('.videos-page').html(videos);
  $('.videos-page').show();
  $('.contact-page').hide();
  $('.about-page').hide();
  $('.puppics-page').hide();
  $('#videos').addClass('selected');
  $('#about').removeClass('selected');
  $('#puppics').removeClass('selected');
  $('#contact').removeClass('selected');
}

function toggleMenu() {
  $('.hamburger-menu').on('click', function () {
    console.log('hi');
  });
}

$(document).ready(() => {
  select();
  start();
});
