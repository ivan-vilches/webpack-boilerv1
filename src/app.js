// import {Person} from './Person';

// CSS IMPORTS
import './scss/style.scss';

// const p = new Person('Zura');
// console.info(p.sayHello());

import $ from '../node_modules/jquery';
import Masonry from '../node_modules/masonry-layout';
import jQueryBridget from '../node_modules/jquery-bridget';
import imagesLoaded from '../node_modules/imagesloaded';

jQueryBridget('masonry', Masonry, $);
jQueryBridget('imagesLoaded', imagesLoaded, $);

$(document).ready(function() {
  const $window = $(window);

  $window.scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.top-socials').addClass('changeColor');
    }

    if ($(this).scrollTop() < 50) {
      $('.top-socials').removeClass('changeColor');
    }
  });

  // toggle open menu

  $('.menu-icon-toggle').click(function() {
    $('.header-titulo').fadeToggle(1000);
    $('.nav-list').fadeToggle('slow');
  });

  // Masonry

  const $container = $('.grid');

  $container.imagesLoaded(() => {
    $container.masonry({
      itemSelector: '.grid-item',
    });
  });
});
