import React from 'react';
import findRoute from '../helpers/route';
import PropTypes from 'prop-types';
import RoutePoint from './RoutePoint';

const RouteList = (props) => {
  const points = findRoute(props.movements);
  const thePoints = points.map(point => {
    return <RoutePoint data={point} />
  })
  return (<>
  <h2>Driver's Route</h2>
  <table>
    <thead>
      <th>
        <td>Stop #</td>
        <td>Location</td>
        <td>Latitude</td>
        <td>Longitude</td>
        <td>Pick up</td>
        <td>Drop off</td>
      </th>
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