import { videos, contact } from './images/thumbnails/index.js';

function selectContact() {
  $('#contact').on('click', function () {
    $('.contact').html(contact);
    $('.contact').show();
    $('.videos').hide();
    $('#contact').addClass('selected');
    $('#videos').removeClass('selected');
    $('#about').removeClass('selected');
    $('#puppics').removeClass('selected');
  });
}
function selectVideos() {
  $('#videos').on('click', function () {
    $('.videos').html(videos);
    $('.videos').show();
    $('.contact').hide();
    $('#videos').addClass('selected');
    $('#about').removeClass('selected');
    $('#puppics').removeClass('selected');
    $('#contact').removeClass('selected');
  });
}
function selectAbout() {
  $('#about').on('click', function () {
    $('#about').addClass('selected');
    $('#videos').removeClass('selected');
    $('#contact').removeClass('selected');
    $('#puppics').removeClass('selected');
  });
}
function selectPuppics() {
  $('#puppics').on('click', function () {
    $('#puppics').addClass('selected');
    $('#videos').removeClass('selected');
    $('#contact').removeClass('selected');
    $('#about').removeClass('selected');
  });
}

$(document).ready(() => {
    console.log(videos)
  selectVideos();
  selectAbout();
  selectPuppics();
  selectContact();
});
