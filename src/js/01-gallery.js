import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);
console.log(createImagesCards(galleryItems));
const imagesContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCards(galleryItems);


imagesContainer.innerHTML=cardsMarkup;
//imagesContainer.addEventListener('click', onContainerClick);
function createImagesCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');

}


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 300
});



