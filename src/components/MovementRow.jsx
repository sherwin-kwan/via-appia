import React from 'react';
import crudHelpers from '../helpers/crud';

const MovementRow = (props) => {
  const { deleteFunction, editFunction } = crudHelpers();
  const { data } = props;
  return (
  <tr>
    <td>{data.id}</td>
    <td title={`Latitude: ${data.startLat}, Longitude: ${data.startLong}`}>{data.startLocation}</td>
    <td title={`Latitude: ${data.endLat}, Longitude: ${data.endLong}`}>{data.endLocation}</td>
    <td>{data.freight}</td>
    <td><button onClick={() => props.editFunction}>Edit</button></td>
    <td><button onClick={async () => {
      const zero = await deleteFunction(data.id);
      await props.populateData();
    }}>Delete</button></td>
  </tr>);
};

export default MovementRow;