import React from 'react';
import PropTypes from 'prop-types';

const RoutePoint = (props) => {
  const { num, location, lat, long, code } = props.point;
  return (
    <tr>
      <td>{num}</td>
      <td>{location}</td>
      <td>{lat}</td>
      <td>{long}</td>
      <td>{code.filter(c => c.includes("A"))[0]}</td>
      <td>{code.filter(c => c.includes("B"))[0]}</td>
    </tr>
  );
};

RoutePoint.propTypes = {
  point: PropTypes.object
};

export default RoutePoint;