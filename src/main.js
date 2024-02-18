import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { number } from './js/render-functions';
import { totalHits } from './js/pixabay-api';
let page = 1;
let perPage = 15;
let totalPages;
let cardHeight;
let search;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const addImagesBtn = document.querySelector('.btn');
const options = {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', options);

form.addEventListener('submit', e => {
  e.preventDefault();
  page = 1;
  search = e.target.elements.search.value.trim();

  fetchImages(search, page, perPage)
    .then(images => renderImages(images))
    .then(markup => viewLightBox(markup))
    .catch(error =>
      iziToast.error({
        maxWidth: '432px',
        messageColor: 'rgb(250, 250, 251)',
        messageSize: '16px',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        message: `${error}`,
      })
    );

  form.reset();
});

addImagesBtn.addEventListener('click', () => {
  showLoader();
  page += 1;

  fetchImages(search, page, perPage)
    .then(images => renderImages(images))
    .then(markup => viewLightBox(markup))
    .catch(error =>
      iziToast.error({
        maxWidth: '432px',
        messageColor: 'rgb(250, 250, 251)',
        messageSize: '16px',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        message: `${error}`,
      })
    );

  form.reset();
});

function viewLightBox(markup) {
  if (page === 1) {
    gallery.innerHTML = '';
    gallery.innerHTML = markup;
  } else {
    gallery.insertAdjacentHTML('beforeend', markup);
  }
  cardHeight = gallery.getBoundingClientRect().height / 2;

  hideLoader();
  checkoutBtn();
  totalHitsBtn();
  lightbox.refresh();
  scroll();
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showBtn() {
  addImagesBtn.classList.remove('hidden');
}

function hideBtn() {
  addImagesBtn.classList.add('hidden');
}

function checkoutBtn() {
  if (number === 0) {
    hideBtn();
  } else {
    showBtn();
  }
}

function totalHitsBtn() {
  totalPages = Math.ceil(totalHits / perPage);
  if (page >= totalPages && !(number === 0)) {
    hideBtn();
    iziToast.error({
      maxWidth: '432px',
      messageColor: 'rgb(250, 250, 251)',
      messageSize: '16px',
      backgroundColor: 'rgb(239, 64, 64)',
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
}

function scroll() {
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
