// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const imegesContainer = document.querySelector('.gallery');

const onGalleryItem = galleryItems.map(({ preview, description, original }) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" 
alt="${description}"/>
</a>`).join("");

imegesContainer.insertAdjacentHTML("beforeend", onGalleryItem);


new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250 });

