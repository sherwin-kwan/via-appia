# Via Appia: How-to and Features

* If you are looking for instructions to install and run the app locally, see the [README](/README.md).

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

## Route View

![Route View](/public/routes.png)

* A list of locations for your driver to visit is presented in the table. The stop #'s correspond to the numbered spots on the map.
* At each location, the numbers in "pick up" represent the movement IDs for the freight your driver has to pick up, and vice versa for "drop off".
* A comma-separated list (e.g. "2, 5") means that *both* movements 2 and 5 end at the same spot, and your driver is to drop off both shipments.
* Clicking on the numbers in the pick up or drop off columns links to the details page for that movement.

# Known Imperfections

* By default, the map displays the Pacific Northwest region of North America when it loads. If your movements are somewhere else, you will need to drag the map to the correct part of the world.
* The algorithm for deciding the route is fairly basic - it will normally go from north to south to pick up items and back to north to drop off items. However, if your routes involve a lot of east-west movement, the route may not be optimal.

