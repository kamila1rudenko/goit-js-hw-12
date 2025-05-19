import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGalleryMarkup,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
const PER_PAGE = 15;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Enter a search term' });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.info({ title: 'Info', message: 'No images found' });
      return;
    }

    createGalleryMarkup(data.hits);
    if (data.totalHits > PER_PAGE) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong' });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGalleryMarkup(data.hits);

    const { height: cardHeight } = document.querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage * PER_PAGE >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({ message: 'Failed to load more images' });
  } finally {
    hideLoader();
  }
});