import React from 'react';
import crudHelpers from '../helpers/crud';
import PropTypes from 'prop-types';

const MovementRow = (props) => {
  const { deleteFunction, editFunction } = crudHelpers();
  const { data } = props;

  return (
  <tr>
    <td onClick={() => props.showDetails(data, false, setDetailsScreenShow)}>{data.id}</td>
    <td title={`Latitude: ${data.startLat}, Longitude: ${data.startLong}`}>{data.startLocation}</td>
    <td title={`Latitude: ${data.endLat}, Longitude: ${data.endLong}`}>{data.endLocation}</td>
    <td>{data.freight}</td>
    <td><button onClick={() => showDetails(data, true, setDetailsScreenShow)}>Edit</button></td>
    <td><button onClick={async () => {
      const zero = await deleteFunction(data.id);
      await props.populateData();
    }}>Delete</button></td>
  </tr>);
};

MovementRow.propTypes = {
  data: PropTypes.object,
  showDetails: PropTypes.func, // Needed
  populateData: PropTypes.func
};

export default MovementRow;