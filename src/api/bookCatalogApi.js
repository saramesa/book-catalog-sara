import config from '../config/config';
console.log(config.BASE_URL);
export function getBooksCatalog() {
	const API = 'https://cors-anywhere.herokuapp.com/https://saramesa-book-catalog.firebaseapp.com/api/catalog';
	const BASE_URL = window.BASE_URL;
  	return fetch(BASE_URL)
    .then( (response) => response.json() );
}