// iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// SimpleLightbox library
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// error icon for iziToast message
import errorIcon from './img/error_icon.svg';
// pixabayAPI function
import { pixabayAPI } from './js/pixabay-api';
// render function
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const itemsWrap = document.querySelector('.items-wrap');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', getSearchResult);

function getSearchResult(evt) {
    evt.preventDefault();
    // clear all content
    gallery.innerHTML = '';

    const searchQuery = form.elements.searchField.value.trim();
    if (searchQuery) {
        // show css-loader
        itemsWrap.classList.add('loading');

        pixabayAPI(searchQuery)
            .then(data => {
                // hide css-loader
                itemsWrap.classList.remove('loading');

                if (data['hits'].length !== 0) {
                    renderGallery(gallery, data['hits']);
                    createLightboxInstance();
                } else {
                    showSearchError();
                }
            })
            .catch(err => {
                console.log(err);
                // hide css-loader if promise returned error
                itemsWrap.classList.remove('loading');
            });
    }
}

// create SimpleLightbox instance
function createLightboxInstance() {
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

// show search error
function showSearchError() {
    iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        backgroundColor: '#EF4040',
        theme: 'dark',
        iconUrl: errorIcon,
        position: 'topRight',
        timeout: 3000,
        progressBarColor: '#B51B1B',
        animateInside: false,
        transitionIn: 'fadeIn',
    });
}
