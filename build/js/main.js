/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const catalogItem = document.querySelectorAll('.catalog__item');
  const catalogImg = document.querySelector('.catalog__img');
  const catalogLinks = document.querySelectorAll('.catalog__link');

  catalogLinks.forEach((item) => {
    item.onmouseover = function (event) {
      let target = event.target;
      const parent = target.closest('.catalog__item');
      const src = parent.dataset.image;
      const alt = target.textContent;

      catalogImg.src = `${src}@1x.jpg`;
      catalogImg.alt = alt;
      catalogImg.srcset = `${src}@2x.jpg`;
    };
  });

  const getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange', () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        const response = JSON.parse(request.response);
        callback(response);
      } else {
        console.error(new Error('Ошибка: ' + request.status));
      }
    });
  };

  const generateProduct = (good) => {
    const goodsList = document.querySelector('.product');
    goodsList.textContent = '';
    const { name, photo, oldprice, newprice, desc, colors } = good;

    let colorList = '';

    if (colors) {
      colors.forEach(item => {
        colorList += `
          <li class="product__color">
            <a href="/subwoofers/190453#productPagePart">
              <img class="product__img-color" src="${item}">
            </a>
          </li>
      ` });
    }

      goodsList.insertAdjacentHTML('beforeend', `
        <div class="product__wrapper">
          <div class="product__image">
            <h2>${name}</h2>
            <img src="${photo}" alt="${name}"></div>
          <div class="product__description">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="product__footer"><a class="product__button link" href="#">Купить</a>
              <div class="product__price-wrapper">
                <p class="product__price product__price--before">${oldprice} р.</p>
                <p class="product__price product__price--after">${newprice} Р.</p>
              </div>
            </div>
          </div>
          <div class="product__colors">
            <p>выбери свой цвет</p>
            <ul class="product__colors-list">
              ${colorList}
            </ul>
          </div>
        </div>
      `);
  };

  const renderProduct = (goods) => {
    catalogItem.forEach((item) => {

      item.addEventListener('click', (event) => {
        let target = event.target;
        let linkId;

        catalogLinks.forEach((item) => {
          if (item.classList.contains('catalog__link')) {
            item.classList.remove('catalog__link--active');
          }
        });

        if (target.classList.contains('catalog__link')) {
          event.preventDefault();
          target.classList.add('catalog__link--active');
          const parent = target.closest('.catalog__item');
          linkId = parent.dataset.id;
        } else {
          linkId = target.dataset.id;
        }

      goods.forEach(item => {
        if (item.id === linkId) {
          generateProduct(item);
        }
        })
      });
    });
  };

  getData(('dbase/dbase.json'), renderProduct);

})();

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
