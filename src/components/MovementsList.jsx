import React, { useEffect, useState } from "react";
// import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";
import crudHelpers from "../helpers/crud";
import propTypes from "prop-types";
import DetailsScreen from "./DetailsScreen";

const MovementsList = (props) => {
  // States
  const [movements, setMovements] = useState([]);
  const [detailsScreen, setDetailsScreen] = useState(false);
  const { getMovementData } = crudHelpers();

  async function populateData() {
    const data = await getMovementData();
    const initialMovements = data.map((movement) => {
      console.log("Movement is ... ", movement);
      return (
        <MovementRow
          data={movement}
          key={movement.id}
          setDetailsScreen={setDetailsScreen}
          populateData={populateData}
        />
      );
    });
    if (initialMovements.length) {
      setMovements(initialMovements);
      console.log("Movements set");
    } else {
      setMovements(
        <tr>
          <td colSpan="6">There are no movements in the database.</td>
        </tr>
      );
      console.log("Movements set");
    }
  }

  // Load movements from database
  useEffect(() => {
    populateData();
  }, []);

  const createMovement = () => {
    console.log("Movement creation");
  };

  return (
    <>
      {detailsScreen && <DetailsScreen setDetailsScreen={setDetailsScreen} />}
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
        <button onClick={createMovement}>Create New Movement</button>
      </div>
    </>
  );
};

export default MovementsList;
