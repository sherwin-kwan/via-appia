import React from 'react';

const MovementRow = (props) => {

  const { data } = props;
  return (
  <tr>
    <td>{data.id}</td>
    <td>{data.startLocation}</td>
    <td>{data.endLocation}</td>
    <td>{data.freight}</td>
  </tr>);
};

export default MovementRow;