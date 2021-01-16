import React from 'react';

const MovementRow = (props) => {

  const { data } = props;
  return (
  <tr>
    <td>{data.id}</td>
    <td title={`Latitude: ${data.startLat}, Longitude: ${data.startLong}`}>{data.startLocation}</td>
    <td title={`Latitude: ${data.endLat}, Longitude: ${data.endLong}`}>{data.endLocation}</td>
    <td>{data.freight}</td>
    <td>Edit</td>
    <td>Delete</td>
  </tr>);
};

export default MovementRow;