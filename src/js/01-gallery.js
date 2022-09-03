import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsEl = document.querySelector(`.gallery`);
const imgGallery = createGalleryItems(galleryItems);

galleryItemsEl.insertAdjacentHTML("beforeEnd", imgGallery);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// console.log(createGalleryItems(galleryItems));

galleryItemsEl.addEventListener(`click`, onGalleryItemsClick);

function onGalleryItemsClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImgUrl = evt.target.dataset.source;
  console.log(evt.target.dataset.source);

  evt.preventDefault();
  const instance = basicLightbox.create(`
 <img src="${originalImgUrl}" width="800" height="600">
 `);

  instance.show();

  window.addEventListener(`keydown`, onEscPress);

  function onEscPress(event) {
    const escCode = "Escape";
    if (escCode === event.code) {
      instance.close();
      window.removeEventListener(`keydown`, onEscPress);
    }
  }
}

// console.log(galleryItems);
