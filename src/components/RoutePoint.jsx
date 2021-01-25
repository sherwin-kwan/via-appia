import React from 'react';

const RoutePoint = (props) => {
  const { num, location, lat, long, code } = props.point;
  const pickUp = code.filter(c => c.includes("A"));
  const dropOff = code.filter(c => c.includes("B"));
  return (
    <tr>
      <td>{num}</td>
      <td>{location}</td>
      <td>{lat}</td>
      <td>{long}</td>
      <td>{pickUp.join(', ')}</td>
      <td>{dropOff.join(', ')}</td>
    </tr>
  );
};

export default RoutePoint;