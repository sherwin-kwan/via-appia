import React from 'react';

const RoutePoint = (props) => {
<<<<<<< HEAD
  const { num, location, lat, long, code } = props.point;
  const pickUp = code.filter(c => c.includes("A"));
  const dropOff = code.filter(c => c.includes("B"));
=======
  const { num, location, lat, long, codes } = props.point;
>>>>>>> parent of 87c7419... fix sorting algorithm so points appear in the correct order and with duplicates removed
  return (
    <tr>
      <td>{num}</td>
      <td>{location}</td>
      <td>{lat}</td>
      <td>{long}</td>
<<<<<<< HEAD
      <td>{pickUp.join(', ')}</td>
      <td>{dropOff.join(', ')}</td>
=======
      <td></td>
      <td></td>
>>>>>>> parent of 87c7419... fix sorting algorithm so points appear in the correct order and with duplicates removed
    </tr>
  );
};

export default RoutePoint;