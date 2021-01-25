import React from "react";
import findRoute from "../helpers/route";
import PropTypes from "prop-types";
import RoutePoint from "./RoutePoint";
import RouteMap from './RouteMap';

const RouteList = (props) => {
  const points = findRoute(props.movements);
  const thePoints = points.map((point) => {
    return <RoutePoint point={point} detailsHook={props.detailsHook} setPage={props.setPage}  movements={props.movements} />;
  });
  return (
    <>
      <div>
        <h2>DRIVER'S ROUTE</h2>
        <table>
          <thead>
            <tr>
              <th>Stop #</th>
              <th>Location</th>
              <th>Latitude (deg)</th>
              <th>Longitude (deg)</th>
              <th>Pick up</th>
              <th>Drop off</th>
              <th>Distance (km)</th>
              <th>Cumul. Distance (km)</th>
            </tr>
          </thead>
          <tbody>{thePoints}</tbody>
        </table>
      </div>
      <aside>
        {props.movements.length ? <RouteMap points={points}/> : (<tr>
          <td colSpan="8">Please create at least one movement to display a route.</td>
        </tr>)};
      </aside>
    </>
  );
};

RouteList.propTypes = {
  movements: PropTypes.array,
  detailsHook: PropTypes.object,
  setPage: PropTypes.func
};

export default RouteList;
