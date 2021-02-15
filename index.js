import {
  videos,
  contact,
  aboutTxt,
  aboutImgs,
  puppicsTxt,
  puppicsImgs,
} from './store/index.js';

function selectContact() {
  $('#contact').on('click', function () {
    $('.contact').html(contact);
    $('.contact').show();
    $('.videos').hide();
    $('.about').hide();
    $('.puppics').hide();
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
    $('.about').hide();
    $('#videos').addClass('selected');
    $('#about').removeClass('selected');
    $('#puppics').removeClass('selected');
    $('#contact').removeClass('selected');
  });
}
function selectAbout() {
  $('#about').on('click', function () {
    $('#about').addClass('selected');
    $('.about').html(aboutTxt);
    $('.about').append(aboutImgs);
    $('.about').show();
    $('.videos').hide();
    $('.puppics').hide();
    $('.contact').hide();
    $('#videos').removeClass('selected');
    $('#contact').removeClass('selected');
    $('#puppics').removeClass('selected');
  });
}
function selectPuppics() {
  $('#puppics').on('click', function () {
    $('#puppics').addClass('selected');
    $('.puppics').html(puppicsTxt);
    $('.puppics').append(puppicsImgs);
    $('.puppics').show();
    $('.videos').hide();
    $('.about').hide();
    $('.contact').hide();
    $('#videos').removeClass('selected');
    $('#contact').removeClass('selected');
    $('#about').removeClass('selected');
  });
}

$(document).ready(() => {
  selectVideos();
  selectAbout();
  selectPuppics();
  selectContact();
});
