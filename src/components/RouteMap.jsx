import React, { useState } from "react";
import PropTypes from "prop-types";
import myApiKey from "../helpers/apikey";
import GoogleMapReact from "google-map-react";

const RouteMap = (props) => {
  const [theMap, setTheMap] = useState(null);
  const [apiMaps, setApiMaps] = useState(null);
  const [pline, setPline] = useState(null);

  const displayRoute = (map, maps, points) => {
    if (!map || !maps) return;
    // Remove old polyline before re-rendering it
    console.log('Made it here');
    if (pline) pline.setMap(null);
    const path = [];
    points.forEach((point) => {
      console.log(point.lat, point.long);
      path.push({lat: point.lat, lng: point.long});
    });
    const newPline = new maps.Polyline({
      path,
      geodesic: true,
      strokeColor: "#ff0",
      strokeOpacity: 1.0,
      strokeWeight: 5,
    });
    newPline.setMap(map);
    setPline(newPline);
  };

  return (
    <>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: myApiKey }}
          defaultCenter={{ lat: 45, lng: -120 }}
          defaultZoom={3}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            setTheMap(map);
            setApiMaps(maps);
            return displayRoute(map, maps, props.points);
          }}
        >
          {pointers}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default RouteMap;
