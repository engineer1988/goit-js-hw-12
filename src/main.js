import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { number } from './js/render-functions';
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const addImagesBtn = document.querySelector('.btn');
const options = {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
};
let page = 1;
let perPage = 15;
const params = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: page,
  per_page: perPage,
});
let search;

loader.classList.add('hide');
addImagesBtn.classList.add('hide');
const lightbox = new SimpleLightbox('.gallery a', options);

form.addEventListener('submit', e => {
  e.preventDefault();
  search = e.target.elements.search.value;

  loader.classList.remove('hide');

  fetchImages(search, params)
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
  gallery.innerHTML = '';
  gallery.innerHTML = markup;
  if (number === 0) {
    addImagesBtn.classList.add('hide');
  } else {
    addImagesBtn.classList.remove('hide');
  }
  lightbox.refresh();
  loader.classList.add('hide');
}
