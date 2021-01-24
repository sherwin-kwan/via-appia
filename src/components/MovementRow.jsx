import React from 'react';
import crudHelpers from '../helpers/crud';
import PropTypes from 'prop-types';
import colours from '../helpers/colours';

const MovementRow = (props) => {
  const { deleteFunction } = crudHelpers();
  const { data } = props;

  return (
  <tr onMouseOver={() => props.activateMovement(data.id)} style={{backgroundColor: colours[data.id % 8]}} >
    <td className="details-link" onClick={() => props.showDetails(data, "VIEW")}>{data.id}</td>
    <td title={`Latitude: ${data.startLat}, Longitude: ${data.startLong}`}>{data.startLocation}</td>
    <td title={`Latitude: ${data.endLat}, Longitude: ${data.endLong}`}>{data.endLocation}</td>
    <td>{data.freight}</td>
    <td><button onClick={() => props.showDetails(data, "EDIT")}>Edit</button></td>
    <td><button onClick={async () => {
      await deleteFunction(data.id);
      await props.populateData();
    }}>Delete</button></td>
  </tr>);
};

MovementRow.propTypes = {
  data: PropTypes.object,
  showDetails: PropTypes.func, // Needed
  populateData: PropTypes.func,
  activateMovement: PropTypes.func
};

export default MovementRow;