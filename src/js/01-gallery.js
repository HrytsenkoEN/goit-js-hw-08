// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightboxRef = document.querySelector(".gallery");
const lightboxMarkup = createBoxItem(galleryItems);
lightboxRef.insertAdjacentHTML(`afterbegin`, lightboxMarkup);

function createBoxItem(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `<a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`
        )
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
