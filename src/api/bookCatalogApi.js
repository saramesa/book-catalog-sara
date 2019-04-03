const API = 'https://cors-anywhere.herokuapp.com/https://saramesa-book-catalog.firebaseapp.com/api/catalog';

export function getBooksCatalog() {
  let url = API;
  return fetch(url)
    .then( (response) => response.json() );
}