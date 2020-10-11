import products from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

// Создание и рендер разметки по массиву данных 
// и предоставленному шаблону.


// const createFotoMarkup = products.reduce((acc, { preview, original, description }) => {
//   acc += `<li class="gallery__item">
//     <a class="gallery__link" href="${original}">
//     <img class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"/>
//       </a>
//       </li>`;
//   return acc;
// }, '');
// galleryList.insertAdjacentHTML('beforeend', createFotoMarkup);

const createFotoMarkup = (options) => {
  const { preview, original, description } = options;
    return `<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">

  <img
    src="${preview}" 
    data-source="${original}"
    alt="${description}" 
    class="gallery__image">
  </a>
  </li>`;
};
const makeItemsGallery = products.map(createFotoMarkup).join(" ");

galleryList.insertAdjacentHTML('beforeend', makeItemsGallery);

// Реализация делегирования на галерее ul.js-gallery 
// и получение url большого изображения.

galleryList.addEventListener('click', onFotoClick);
const lightBox = document.querySelector('.lightbox');
const lightBoxOverlay = document.querySelector('.lightbox__overlay');
const ligthBoxImage = document.querySelector('.lightbox__image');

// Открытие модального окна по клику на элементе галереи.
function onFotoClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightBox.classList.add('is-open');
  // Подмена значения атрибута src элемента img.lightbox__image.
  ligthBoxImage.src = evt.target.dataset.source;
  ligthBoxImage.alt = evt.target.alt;

  return evt.target.dataset.source;
};


const btnClose = document.querySelector('.lightbox__button');

// Закрытие модального окна по клику 
// на кнопку button[data - action= "close-lightbox"]
btnClose.addEventListener('click', onCloseModal);
// Закрытие модального окна по клику на div.lightbox__overlay
lightBoxOverlay.addEventListener('click', onCloseModal);

function onCloseModal(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  lightBox.classList.remove('is-open');

// Очистка значения атрибута src элемента img.lightbox__image
  ligthBoxImage.removeAttribute('src');
  ligthBoxImage.removeAttribute('alt');
}