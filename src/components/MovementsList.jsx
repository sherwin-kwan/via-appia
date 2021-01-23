import React, { useEffect, useState } from "react";
// import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";
import crudHelpers from "../helpers/crud";
import PropTypes from "prop-types";
import DetailsScreen from "./DetailsScreen";
import useDetailsScreen from "../helpers/useDetailsScreen";

const MovementsList = (props) => {
  // States
  const [movements, setMovements] = useState([]);
  const { getMovementData } = crudHelpers();
  // Custom Hooks
  const detailsHook = useDetailsScreen();
  const { mode, setMode, activeMovement, setActiveMovement, detailsScreenShow, setDetailsScreenShow } = detailsHook;

  async function populateData() {
    const data = await getMovementData();
    const initialMovements = data.map((movement) => {
      return (
        <MovementRow
          data={movement}
          key={movement.id}
          populateData={populateData}
          showDetails={showDetails}
        />
      );
    });
    if (initialMovements.length) {
      setMovements(initialMovements);
    } else {
      setMovements(
        <tr>
          <td colSpan="6">There are no movements in the database.</td>
        </tr>
      );
    }
  };

  const showDetails = (movement, mode) => {
    setMode(mode);
    setActiveMovement(movement);
    setDetailsScreenShow(true);
  };

  // Load movements from database
  useEffect(() => {
    populateData();
  }, [detailsScreenShow]);

  // Blur and un-blur body when modal is showing
  useEffect(() => {
    if (detailsScreenShow) {
      document.querySelector('main').classList.add('blurred');
    } else {
      document.querySelector('main').classList.remove('blurred');
    }
  }, [detailsScreenShow]);

  return (
    <>
      {detailsScreenShow && <DetailsScreen setDetailsScreenShow={setDetailsScreenShow} mode={mode} movement={activeMovement} />}
      <div className="movements-list">
        <h2>MOVEMENTS</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start</th>
              <th>Finish</th>
              <th>Freight</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>{movements}</tbody>
        </table>
        <button onClick={() => showDetails({}, "CREATE")}>Create New Movement</button>
      </div>
    </>
  );
};

MovementsList.propTypes = {

};

export default MovementsList;
