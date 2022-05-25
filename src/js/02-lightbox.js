import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('ul.gallery')

const createGallery = 
galleryItems.map(({preview, original, description}) => 
`<li>
<a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt=${description} />
</a>
</li>`
)

  gallery.insertAdjacentHTML('beforeend', createGallery.join(''))

  gallery.addEventListener('click' , openBigPicture)

  function openBigPicture(e) {
      e.preventDefault()

      if (e.target.nodeName !== 'IMG') {
        return;
    };
    
    var lightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: "alt", captionDelay: "250" });

  }