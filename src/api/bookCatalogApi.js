import config from "../config/config";

export default async function getBooksCatalog() {
	const response = await fetch(config.API_URL);
	return response.json();
}
