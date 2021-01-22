import React from "react";
import PropTypes from "prop-types";

const DetailsScreen = (props) => {
  const { mode, movement } = props;

  const submitMovementForm = (event) => {
    event.preventDefault();
    console.log("SUBMITTED");
  };

  const title = (mode === "CREATE") ? "Create Movement" : (mode === "EDIT") ? `Editing Movement ${movement.id}` : `Viewing Movement ${movement.id}`;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <div className="content">
        <form>
          <label htmlFor="start-location">Starting Location: </label>
          <input type="text" id="start-location" name="start-location" value={movement.startLocation || ""} />
          <label htmlFor="start-lat">Starting Latitude: </label>
          <input type="text" id="start-lat" name="start-lat" value={movement.startLat || ""} />
          <label htmlFor="start-long">Starting Longitude: </label>
          <input type="text" id="start-long" name="start-long" value={movement.startLong || ""} />
          <label htmlFor="end-location">Ending Location: </label>
          <input type="text" id="end-location" name="end-location" value={movement.endLocation || ""} />
          <label htmlFor="end-lat">Ending Latitude: </label>
          <input type="text" id="end-lat" name="end-lat" value={movement.endLat || ""} />
          <label htmlFor="end-long">Ending Longitude: </label>
          <input type="text" id="end-long" name="end-long" value={movement.endLong || ""} />
        </form>
      </div>
      <div className="actions">
        <input
          type="submit"
          className="save-button"
          onClick={submitMovementForm}
          value="Save" />
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
