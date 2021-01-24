import React from 'react';

const RoutePoint = (props) => {
  const { num, location, lat, long, codes } = props.point;
  return (
    <tr>
      <td>{num}</td>
      <td>{location}</td>
      <td>{lat}</td>
      <td>{long}</td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default RoutePoint;