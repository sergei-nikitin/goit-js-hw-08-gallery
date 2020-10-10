import products from './gallery-items.js';

const fotosList = document.querySelector('.gallery, .js-gallery');

// Создание и рендер разметки по массиву данных 
// и предоставленному шаблону.
const fotosMakeList = products.reduce((acc, { preview, original, description }) => {
    acc += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`;
    return acc;
}, '')
const fotoList = document.querySelector('.gallery');
fotoList.insertAdjacentHTML('beforeend', fotosMakeList);





// const createFotoMarkup = (options) => {
//   const { preview, original, description } = options;
//     return `<li class="gallery__item">
//   <a class="gallery__link"
//     href="${original}">

//   <img
//     src="${preview}" 
//     data-source="${original}"
//     alt="${description}" 
//     class="gallery__image">
//   </a>
//   </li>`;
// };
// const makeItemsGallery = products.map(createFotoMarkup).join(" ");

// fotosList.insertAdjacentHTML('beforeend', makeItemsGallery);


// --------------------------------------------------

// Реализация делегирования на галерее ul.js-gallery 
// и получение url большого изображения.

// fotosList.addEventListener('click', onFotoClick);

// function onfotoClick(evt) { };