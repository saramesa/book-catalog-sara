export function getBooksCatalog() {
	const API = 'https://cors-anywhere.herokuapp.com/https://saramesa-book-catalog.firebaseapp.com/api/catalog';
	const BASE_URL = window.BASE_URL;
  	return fetch(API)
    .then( (response) => response.json() );
}