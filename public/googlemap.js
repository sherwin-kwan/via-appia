import { Loader } from '@googlemaps/js-api-loader';
import myApiKey from './apikey.js';

const loader = new Loader({
  apiKey: myApiKey,
  version: "weekly"
});

loader.load().then(() => {
  console.log('LOADING MAP');
  map = new google.maps.Map(document.querySelector('div.map'), {
    center: {lat: 49.25, long: -122.95},
    zoom: 8
  })
});