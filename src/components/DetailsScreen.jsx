import React from "react";

const DetailsScreen = (props) => {
  return (
    <div className="modal">
      <h2>{props.create ? "Create Movement" : "Edit Movement"}</h2>
      <div className="content">
        <table>
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
        </table>
      </div>
      <div className="actions">
        <button
          className="save-button"
          onClick={props.create ? null : null}>
          Save
        </button>
        <button
          className="cancel-button"
          onClick={() => props.setDetailsScreen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DetailsScreen;
