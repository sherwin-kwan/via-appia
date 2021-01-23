import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import myApiKey from "../helpers/apikey";

const Map = (props) => {

  console.log("Loading map");
  return (
    <aside>
      <p>Map goes here: </p>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: myApiKey }}
          defaultCenter={{ lat: 49.25, lng: -123 }}
          defaultZoom={10}
        />
      </div>
    </aside>
  );
};

export default Map;
