# Via Appia

Via Appia is an app to help dispatchers in a logistics company track the movement of goods and send drivers to deliver freight.

This project was created as part of the application process for a software development position with Rose Rocket.

(Note: This file contains instructions for building and running the app. Instructions on using the app may be found [here](/FEATURES.md).)

## Running Locally (instructions for Linux)

This app consists of a React front end (this repo) and a [Node/Express API](https://github.com/sherwin-kwan/via-appia-api). You need to have both running for this app to work properly.

1) Begin by cloning both this repo and the API repo. 
```
git clone https://github.com/sherwin-kwan/via-appia.git
git clone https://github.com/sherwin-kwan/via-appia-api.git
```

2) Install dependencies for both projects. If you do not have Yarn installed on your system, you should be able to install it from your package repository (e.g. `sudo apt install yarn`).
```
cd via-appia
yarn install
(Wait for installation)

cd ../via-appia-api
yarn install
```

3) You will need access to a [Google Maps JavaScript API key](https://developers.google.com/maps/documentation/javascript/get-api-key). Follow the instructions and enter your API key on line 3 of `/src/components/helpers/apikey.example.js`, then rename the file to `apikey.js` (leave it in the `helpers` folder). This is important - THE APP WILL NOT COMPILE WITHOUT A MAPS API KEY!

4) Ensure that you have ports 3000 and 3001 available on your machine - this React front-end will run on port 3000 and the API on port 3001. 

- To change the port for the front-end React app to XXXX, create a new environment file at `/via-appia/.env` and enter the text "PORT=XXXX"

- To change the port for the back-end API, change the port number to XXXX on line 15 in `/via-appia-api/bin/www`, and then change the proxy URL in `/via-appia/package.json` to use `http://localhost:XXXX`)

5) Now, open 2 windows of a shell or terminal emulator, navigate to /via-appia project folder in one of them, and /via-appia-api folder in the other one. Run `yarn start` to get both servers up and running.

5) A browser window should appear and navigate to the application automatically. (If it doesn't, open your browser of choice and navigate to http://localhost:3000 or whatever port number you chose for the React front-end)

WARNING: The back-end is NOT linked to a database; the data is stored in an object which is seeded in `/via-appia/data/movements.js`. ANY NEW MOVEMENTS YOU CREATE WIL BE LOST IF THE SERVER IS KILLED OR RESTARTED.