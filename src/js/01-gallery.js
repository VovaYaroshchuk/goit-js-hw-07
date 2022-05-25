import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('div.gallery')

const createGallery = 
galleryItems.map(({preview, original, description}) => 
        `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`)

  gallery.insertAdjacentHTML('beforeend', createGallery.join(''))


  gallery.addEventListener('click' , openBigPicture)

  function openBigPicture(e) {
      e.preventDefault()

      if (e.target.nodeName !== 'IMG') {
        return;
    };
    
    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} alt="${e.target.alt}">
`)

instance.show()

  }

