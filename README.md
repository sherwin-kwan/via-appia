# Via Appia

Via Appia is an app to help dispatchers in a logistics company track the movement of goods and send drivers to deliver freight.

This project was created as part of the application process for a software development position with Rose Rocket.

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

3) Ensure that you have ports 3000 and 3001 available on your machine - this React front-end will run on port 3000 and the API on port 3001. 

- To change the port for the front-end React app to XXXX, create a new environment file at `/via-appia/.env` and enter the text "PORT=XXXX"

- To change the port for the back-end API, change the port number to XXXX on line 15 in `/via-appia-api/bin/www`, and then change the proxy URL in `/via-appia/package.json` to use `http://localhost:XXXX`)

4) Now, open 2 windows of a shell or terminal emulator, navigate to /via-appia project folder in one of them, and /via-appia-api folder in the other one. Run `yarn start` to get both servers up and running.

5) A browser window should appear and navigate to the application automatically. (If it doesn't, open your browser of choice and navigate to http://localhost:3000 or whatever port number you chose for the React front-end)

WARNING: The back-end is NOT linked to a database; the data is stored in an object which is seeded in `/via-appia/data/movements/js`. ANY NEW MOVEMENTS YOU CREATE WIL BE LOST IF THE SERVER IS KILLED OR RESTARTED.

# Using Via Appia

![Movements](/public/movements.png)

* You may switch between the "Movement" and "Route" views by clicking on the tabs in the header.

## Create a new movement

* Click "Create New Movement"
* Fill out the form. All fields not marked with `(optional)` are required.
* Click "Save"
* If you enter the same start/end coordinates as a different movement, it will not save. Please instead edit the other movement and add the additional freight.
* If an error occurs here, please confirm that the back-end API server is running.

## Edit a movement

* Click on the "Edit" button for a movement
* Edit the form and click "Save" to save

## Delete a movement

* Click on the "Delete" button for a movement. Warning: There will be no confirmation dialog box - deletion is PERMANENT and there is no way of getting the data back!

## Map

* On the map, each movement appears as a line with the same colour as the corresponding row in the table. "A" marks the start location and "B" marks the end location.
* When you mouse over a row in the table, that line will be highlighted on the map.
* By default, the map displays the Pacific Northwest region of North America. You may need to drag to a different part of the world to see your movements.

## Route View

![Route View](/public/routes.png)

* A list of locations for your driver to visit is presented in the table. The stop #'s correspond to the numbered spots on the map.
* At each location, the numbers in "pick up" represent the movement IDs for the freight your driver has to pick up, and vice versa for "drop off".
* A comma-separated list (e.g. "2, 5") means that *both* movements 2 and 5 end at the same spot, and your driver is to drop off both shipments.