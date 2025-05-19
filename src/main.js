import { getImagesByQuery } from './js/pixabay-api.js';
import { createGalleryMarkup, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const query = formData.get('searchQuery').trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Enter a search term',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'No images found',
      });
      return;
    }

    createGalleryMarkup(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});