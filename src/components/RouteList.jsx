import React from 'react';
import findRoute from '../helpers/route';
import PropTypes from 'prop-types';
import RoutePoint from './RoutePoint';

const RouteList = (props) => {
  const points = findRoute(props.movements);
  const thePoints = points.map(point => {
    return <RoutePoint point={point} />
  })
  return (<>
  <h2>Driver's Route</h2>
  <table>
    <thead>
      <tr>
        <th>Stop #</th>
        <th>Location</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Pick up</th>
        <th>Drop off</th>
      </tr>
    </thead>
    <tbody>
      {thePoints}
    </tbody>
  </table>
  </>);
};

RouteList.propTypes = {
  movements: PropTypes.array
};

export default RouteList;