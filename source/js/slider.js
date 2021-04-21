/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });

})();
