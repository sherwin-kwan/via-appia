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

  useEffect(() => {
    const initialMovements = props.movements.map((movement) => {
      return (
        <MovementRow
          data={movement}
          key={movement.id}
          populateData={props.populateData}
          showDetails={showDetails}
          setActiveMovement={setActiveMovement}
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
          setDetailsScreenShow={setDetailsScreenShow}
          mode={mode}
          movement={activeMovement}
        />
      )}
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
  populateData: PropTypes.object,
  movements: PropTypes.array,
  setMovements: PropTypes.func
};

export default MovementsList;
