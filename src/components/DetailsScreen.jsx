import React from "react";
import PropTypes from "prop-types";

const DetailsScreen = (props) => {
  const { mode, movement } = props;

  const title = (mode === "CREATE") ? "Create Movement" : (mode === "EDIT") ? `Editing Movement ${movement.id}` : `Viewing Movement ${movement.id}`;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <div className="content">
        <form>
          <label for="start-location">Starting Location: </label>
          <input type="text" id="start-location" name="start-location">{movement.startLocation}</input>
          <label for="start-lat">Starting Latitude: </label>
          <input type="text" id="start-lat" name="start-lat">{movement.startLat}</input>
          <label for="start-long">Starting Longitude: </label>
          <input type="text" id="start-long" name="start-long">{movement.startLong}</input>
          <label for="end-location">Ending Location: </label>
          <input type="text" id="end-location" name="end-location">{movement.endLocation}</input>
          <label for="end-lat">Ending Latitude: </label>
          <input type="text" id="end-lat" name="end-lat">{movement.endLat}</input>
          <label for="end-long">Ending Longitude: </label>
          <input type="text" id="end-long" name="end-long">{movement.endLong}</input>
        </form>
        {/* <table>
          <tbody>
            <tr>
              <td>Starting Location:</td>
              <td></td>
            </tr>
            <tr>
              <td>Starting Latitude:</td>
              <td></td>
            </tr>
            <tr>
              <td>Starting Longitude:</td>
              <td></td>
            </tr>
            <tr>
              <td>Ending Location:</td>
              <td></td>
            </tr>
            <tr>
              <td>Ending Latitude:</td>
              <td></td>
            </tr>
            <tr>
              <td>Ending Longitude:</td>
              <td></td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="actions">
        <button
          className="save-button"
          onClick={props.create ? null : null}>
          Save
        </button>
        <button
          className="cancel-button"
          onClick={() => props.setDetailsScreenShow(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

DetailsScreen.propTypes = {
  movement: PropTypes.object,
  mode: PropTypes.string
};

export default DetailsScreen;
