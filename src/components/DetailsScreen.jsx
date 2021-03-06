import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import crudHelpers from "../helpers/crud";

const DetailsScreen = (props) => {
  // Variables
  const { mode } = props;
  const { activeMovement, setActiveMovement, setDetailsScreenShow } = props.detailsHook;
  const [movement, setMovement] = useState(activeMovement);
  const { submitMovementForm } = crudHelpers();

  // States
  const [errors, setErrors] = useState('');

  // On component mount
  useEffect(() => {
    setActiveMovement({});
  }, []);

  // Handling controlled textboxes
  const handleChange = (event) => {
    setMovement(prev => { 
      return {...prev, 
        [event.target.name]: event.target.value
      }
    });
  };

  const submitForm = async (e) => {
    try {
      const successful = await submitMovementForm(e, mode, movement, props.movements);
      if (successful) {
        setDetailsScreenShow(false);
        setErrors('');
      } else {
        throw new Error("Error saving the form");
      }
    } catch (err) {
      setErrors(err.message);
    }
  };

  const title = (mode === "CREATE") ? "Create Movement" : (mode === "EDIT") ? `Editing Movement ${movement.id}` : `Viewing Movement ${movement.id}`;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <div className="content">
        <form className="crud" onSubmit={submitForm}>
          <label htmlFor="start-location">Starting Location (optional): </label>
          <input type="text" id="start-location" name="startLocation" value={movement.startLocation || ""} onChange={handleChange} />
          <label htmlFor="start-lat">Starting Latitude: </label>
          <input type="text" id="start-lat" name="startLat" value={movement.startLat} onChange={handleChange} />
          <label htmlFor="start-long">Starting Longitude: </label>
          <input type="text" id="start-long" name="startLong" value={movement.startLong} onChange={handleChange} />
          <label htmlFor="end-location">Ending Location (optional): </label>
          <input type="text" id="end-location" name="endLocation" value={movement.endLocation || ""} onChange={handleChange} />
          <label htmlFor="end-lat">Ending Latitude: </label>
          <input type="text" id="end-lat" name="endLat" value={movement.endLat} onChange={handleChange}/>
          <label htmlFor="end-long">Ending Longitude: </label>
          <input type="text" id="end-long" name="endLong" value={movement.endLong} onChange={handleChange} />
          <label htmlFor="end-long">Freight: </label>
          <input type="text" id="end-long" name="freight" value={movement.freight || ""} onChange={handleChange} />
          <label htmlFor="end-long">Detailed instructions (optional): </label>
          <textarea rows="5" id="end-long" name="details" value={movement.details || ""} onChange={handleChange} />
        </form>
        <p className="errors">{errors}</p>
      </div>
      <div className="actions">
        <input
          type="submit"
          className={mode === "VIEW" ? "hide" : "save-button"}
          onClick={submitForm}
          value="Save" />
        <button
          className="cancel-button"
          onClick={() => setDetailsScreenShow(false)}>
          {mode === "VIEW" ? "Back" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

DetailsScreen.propTypes = {
  mode: PropTypes.string,
  detailsHook: PropTypes.object
};

export default DetailsScreen;
