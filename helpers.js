import {
  puppicsImgs,
  videos,
  aboutTxt,
  aboutImgs,
  contact,
} from './store/index.js';

function displayContact() {
  $('.contact').on('click', function () {
    $('.contact-page').html(contact);
    $('.contact-page').show();
    $('.videos-page').hide();
    $('.about-page').hide();
    $('.puppics-page').hide();
    $('.contact').addClass('selected');
    $('.videos').removeClass('selected');
    $('.about').removeClass('selected');
    $('.puppics').removeClass('selected');
  });
}

function displayVideos() {
  $('.videos').on('click', function () {
    $('.videos-page').html(videos);
    $('.videos-page').show();
    $('.contact-page').hide();
    $('.about-page').hide();
    $('.puppics-page').hide();
    $('.videos').addClass('selected');
    $('.about').removeClass('selected');
    $('.puppics').removeClass('selected');
    $('.contact').removeClass('selected');
  });
}

function displayAbout() {
  $('.about').on('click', function () {
    $('.about').addClass('selected');
    $('.about-page').html(aboutTxt);
    $('.about-page').append(aboutImgs);
    $('.about-page').show();
    $('.videos-page').hide();
    $('.puppics-page').hide();
    $('.contact-page').hide();
    $('.videos').removeClass('selected');
    $('.contact').removeClass('selected');
    $('.puppics').removeClass('selected');
  });
}

function displayPuppics() {
  $('.puppics').on('click', function () {
    $('.puppics').addClass('selected');
    // $('.puppics-page').html(puppicsTxt);
    $('.puppics-page').html(puppicsImgs);
    $('.puppics-page').show();
    $('.videos-page').hide();
    $('.about-page').hide();
    $('.contact-page').hide();
    $('.videos').removeClass('selected');
    $('.contact').removeClass('selected');
    $('.about').removeClass('selected');
  });
}

export { displayContact, displayVideos, displayAbout, displayPuppics };
