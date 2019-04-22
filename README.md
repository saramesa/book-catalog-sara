This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For this app I used my own API integrated with Firebase: 

### `https://saramesa-book-catalog.firebaseapp.com/api/catalog`

It's a pretty simple APi, with some book information. I had to add a 'cors-anywhere' workaround to get it to work. Sometimes it takes a long time to process the request so I also added a backup JSON with the same data as in my API. If the request fails it will retrieve data from my backup JSON.