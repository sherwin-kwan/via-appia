import React, { useEffect, useState } from "react";
// import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";
import PropTypes from "prop-types";
import DetailsScreen from "./DetailsScreen";

const MovementsList = (props) => {
  const {
    mode,
    setMode,
    activeMovement,
    setActiveMovement,
    detailsScreenShow,
    setDetailsScreenShow,
  } = props.detailsHook;

  const [movementRows, setMovementRows] = useState(null);

  const activateMovement = (id) => {
    const myMovement = props.movements.find(movement => movement.id === id);
    if (myMovement) setActiveMovement(myMovement);
  };

  useEffect(() => {
    const initialMovements = props.movements.map((movement) => {
      return (
        <MovementRow
          data={movement}
          key={movement.id}
          populateData={props.populateData}
          showDetails={showDetails}
          detailsScreenShow={detailsScreenShow}
          setActiveMovement={setActiveMovement}
          activateMovement={activateMovement}
        />
      );
    });
    if (initialMovements.length) {
      setMovementRows(initialMovements);
    } else {
      setMovementRows(
        <tr>
          <td colSpan="6">There are no movements in the database.</td>
        </tr>
      );
    }
  }, [props.movements]);

  const showDetails = (movement, mode) => {
    setMode(mode);
    setActiveMovement(movement);
    setDetailsScreenShow(true);
  };

  // Load movements from database
  useEffect(() => {
    props.populateData();
  }, [detailsScreenShow]);

  // Blur and un-blur body when modal is showing
  useEffect(() => {
    if (detailsScreenShow) {
      document.querySelector("main").classList.add("blurred");
    } else {
      document.querySelector("main").classList.remove("blurred");
    }
  }, [detailsScreenShow]);

  return (
    <>
      {detailsScreenShow && (
        <DetailsScreen
          detailsHook={props.detailsHook}
          mode={mode}
        />
      )}
      <div className="movements-list">
        <h2>MOVEMENTS</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start ("A" on map)</th>
              <th>Finish ("B" on map)</th>
              <th>Freight</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>{movementRows}</tbody>
        </table>
        <button onClick={() => showDetails({}, "CREATE")}>
          Create New Movement
        </button>
      </div>
    </>
  );
};

MovementsList.propTypes = {
  detailsHook: PropTypes.object,
  populateData: PropTypes.func,
  movements: PropTypes.array,
  setMovements: PropTypes.func
};

export default MovementsList;
