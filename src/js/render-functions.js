import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function createGalleryMarkup(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="card">
    <a class="card__link" href="${largeImageURL}">
      <img class="card__img" src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${likes}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${views}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${comments}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${downloads}</span>
      </div>
    </div>
  </li>
`).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}