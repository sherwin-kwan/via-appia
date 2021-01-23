import React from "react";
import GoogleMapReact from "google-map-react";
import myApiKey from "../helpers/apikey";
import Pointer from "./Pointer";
import LineTo from 'react-lineto';

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

  // const drawLines = props.movements.map(movement => {
  //     return (
  //       <LineTo from={"A" + String(movement.id)} to={"B" + String(movement.id)} />
  //     );
  //   });

  console.log("Loading map");
  return (
    <aside>
      <p>Map goes here: </p>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: myApiKey }}
          defaultCenter={{ lat: 49.25, lng: -123 }}
          defaultZoom={8}
        >
          {startPointers}
          {endPointers}
        </GoogleMapReact>
      </div>
    </aside>
  );
};

export default Map;
