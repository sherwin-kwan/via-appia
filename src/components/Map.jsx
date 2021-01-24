import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import myApiKey from "../helpers/apikey";
import Pointer from "./Pointer";
import colours from "../helpers/colours";
import PropTypes from 'prop-types';

const Map = (props) => {
  const [theMap, setTheMap] = useState(null);
  const [apiMaps, setApiMaps] = useState(null);
  const [lines, setLines] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const { activeMovement } = props.detailsHook;

  const startPointers = props.movements.map((movement) => {
    return (
      <Pointer
        style={{backgroundColor: colours[movement.id % 8]}}
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
        style={{backgroundColor: colours[movement.id % 8]}}
        key={"B" + String(movement.id)}
        id={"B" + String(movement.id)}
        lat={movement.endLat}
        lng={movement.endLong}
        text="B"
      />
    );
  });

  const handleApiLoaded = (map, maps, movements) => {
    if (!map || !maps) return;
    const path = lines;
    // Remove old lines before re-rendering them
    path.forEach(polyline => polyline.setMap(null));
    movements.forEach((movement) => {
      path[movement.id] = new maps.Polyline({
        path: [
          { lat: movement.startLat, lng: movement.startLong },
          { lat: movement.endLat, lng: movement.endLong },
        ],
        geodesic: true,
        strokeColor: colours[movement.id % 8],
        strokeOpacity: 1.0,
        strokeWeight: 3,
      });
      path[movement.id].setMap(map);
    });
    setLines(path);
  };

  useEffect(() => {
    if (activeId && lines[activeId]) {
      lines[activeId].setOptions({strokeWeight: 3});
    };
    setActiveId(activeMovement.id);
    if (activeMovement.id && lines[activeMovement.id]) {
      lines[activeMovement.id].setOptions({strokeWeight: 9});
    }
  }, [activeMovement]);
 
  useEffect(() => {
    handleApiLoaded(theMap, apiMaps, props.movements)
  }, [theMap, apiMaps, props.movements]);

  return (
    <aside>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: myApiKey }}
          defaultCenter={{ lat: 49.25, lng: -123 }}
          defaultZoom={8}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            setTheMap(map);
            setApiMaps(maps);
            return handleApiLoaded(map, maps, props.movements);
          }
          }
        >
          {startPointers}
          {endPointers}
        </GoogleMapReact>
      </div>
    </aside>
  );
};

Map.propTypes = {
  detailsHook: PropTypes.object,
  movements: PropTypes.array
};

export default Map;
