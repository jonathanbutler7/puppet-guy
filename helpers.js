import {
  puppicsImgs,
  videos,
  aboutTxt,
  aboutImgs,
  contact,
} from './store/index.js';

function displayContact() {
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

function displayVideos() {
  $('#videos').on('click', function () {
    $('.videos').html(videos);
    $('.videos').show();
    $('.contact').hide();
    $('.about').hide();
    $('.puppics').hide();
    $('#videos').addClass('selected');
    $('#about').removeClass('selected');
    $('#puppics').removeClass('selected');
    $('#contact').removeClass('selected');
  });
}

function displayAbout() {
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

function displayPuppics() {
  $('#puppics').on('click', function () {
    $('#puppics').addClass('selected');
    // $('.puppics').html(puppicsTxt);
    $('.puppics').html(puppicsImgs);
    $('.puppics').show();
    $('.videos').hide();
    $('.about').hide();
    $('.contact').hide();
    $('#videos').removeClass('selected');
    $('#contact').removeClass('selected');
    $('#about').removeClass('selected');
  });
}

export { displayContact, displayVideos, displayAbout, displayPuppics };
