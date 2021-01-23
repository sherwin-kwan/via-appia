import React from "react";
import GoogleMapReact from "google-map-react";
import myApiKey from "../helpers/apikey";
import Pointer from "./Pointer";

const Map = (props) => {
  const startPointers = props.movements.map((movement) => {
    return (
      <Pointer
        key={"A" + String(movement.id)}
        id={"A" + String(movement.id)}
        lat={movement.startLat}
        lng={movement.startLong}
        text="A"
      />
    );
  });

  const endPointers = props.movements.map((movement) => {
    return (
      <Pointer
        key={"B" + String(movement.id)}
        id={"B" + String(movement.id)}
        lat={movement.endLat}
        lng={movement.endLong}
        text="B"
      />
    );
  });

  const handleApiLoaded = (map, maps, movements) => {
    const path = new Array;
    movements.forEach((movement) => {
      path[movement.id] = new maps.Polyline({
        path: [
          { lat: movement.startLat, lng: movement.startLong },
          { lat: movement.endLat, lng: movement.endLong },
        ],
        geodesic: true,
        strokeColor: "blue",
        strokeOpacity: 1.0,
        strokeWeight: 5,
      });
      path[movement.id].setMap(map);
    });
  };
  
  console.log("Loading map");
  return (
    <aside>
      <p>Map goes here: </p>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: myApiKey }}
          defaultCenter={{ lat: 49.25, lng: -123 }}
          defaultZoom={8}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) =>
            handleApiLoaded(map, maps, props.movements)
          }
        >
          {startPointers}
          {endPointers}
        </GoogleMapReact>
      </div>
    </aside>
  );
};

export default Map;
