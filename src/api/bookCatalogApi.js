import config from '../config/config';

export function getBooksCatalog() {
  	return fetch(config.API_URL)
    .then( (response) => response.json() );
}