// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
  }).join('');
}

galleryRef.addEventListener("click", onGalleryRefClick);

let modalWindow;

function onGalleryRefClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalWindow = basicLightbox.create(
    `<img src='${event.target.dataset.source}' width="800" height="600">`,
    {
      onShow: modalWindow => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: modalWindow => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  function onEscKeyPress(evt) {
    if (evt.code === "Escape" && basicLightbox.visible()) {
      modalWindow.close();
    }
  }
  modalWindow.show();
}
console.log(galleryItems);
