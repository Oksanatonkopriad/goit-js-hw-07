import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(`.gallery`);
const imgGallery = createGalleryItems(galleryItems);

galleryItemsEl.insertAdjacentHTML("beforeEnd", imgGallery);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}

// galleryItemsEl.addEventListener(`click`, onGalleryItemsClick);

// function onGalleryItemsClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
// }

var lightbox = new SimpleLightbox(".gallery a", {
  nav: true,
  close: true,
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

//   const originalImgUrl = evt.target.dataset.source;
//   console.log(evt.target.dataset.source);

//
//   const instance = basicLightbox.create(`
//  <img src="${originalImgUrl}" width="800" height="600">
//  `);

//   instance.show();

//   window.addEventListener(`keydown`, onEscPress);

//   function onEscPress(event) {
//     const escCode = "Escape";
//     if (escCode === event.code) {
//       instance.close();
//       window.removeEventListener(`keydown`, onEscPress);
//     }
//   }
// }

console.log(galleryItems);
