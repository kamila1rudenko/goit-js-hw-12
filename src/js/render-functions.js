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
  <div class="info-item">
    <p class="label">Likes</p>
    <p class="value">${likes}</p>
  </div>
  <div class="info-item">
    <p class="label">Views</p>
    <p class="value">${views}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments</p>
    <p class="value">${comments}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads</p>
    <p class="value">${downloads}</p>
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

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}