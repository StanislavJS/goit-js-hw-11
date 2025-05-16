import { getImagesByQuery } from "./js/pixabay-api";
import {
    creatrGallery,
    showLoader,
    hideLoader,
} from './js//render-functions';

import IziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = document.querySelector('.input[name="search-text"]');

formElem.addEventListener('submit', findImages);

function findImages(event) { 
    event.preventDefault();
    const inputData = inputElem.value.trim().toLowerCase();

    if (!searchQuery) {
        iziToast.warning({
            message: 'The input field is empty, try again.',
            position: 'center',
        });
        formElem.reset();
        return;
    }
   
    clearGallery();
    showLoader();


    getImagesByQuery(inputData)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.warning({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'center',
                });
                formElem.reset();
                return;
            }

            const images = data.hits;
            creatrGallery(images);

            formElem.reset();
        })
        .catch(error => {
          iziToast.warning({
            message: 'An error occurred. Please try again later.',
            position: 'center',
          });
          console.error(error);
        })
        .finally(() => {
          hideLoader();
          formElem.reset();
        });
    }
            
           