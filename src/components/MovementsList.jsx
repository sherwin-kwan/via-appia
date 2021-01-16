import React, { useEffect, useState } from "react";
import axios from "axios";
// import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";

const MovementsList = (props) => {
  // States
  const [movements, setMovements] = useState([]);

  // Load movements from database
  useEffect(() => {
    async function getMovementData() {
      try {
        const rawData = await axios.get("/movements");
        const { data } = rawData;
        // Grab initial list of movements
        const initialMovements = data.map((movement) => {
          console.log("Movement is ... ", movement);
          return <MovementRow data={movement} key={movement.id} />;
        });
        setMovements(initialMovements);
      } catch (err) {
        console.log("Error: ", err.message);
      }
    }
    getMovementData();
  }, []);

  const createMovement = () => {
    console.log("Movement creation");
  };

  return (
    <div className="movements-list">
      <h2>MOVEMENTS</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start</th>
            <th>Finish</th>
            <th>Freight</th>
          </tr>
        </thead>
        <tbody>{movements}</tbody>
      </table>
      <button onClick={createMovement}>Create New Movement</button>
    </div>
  );
};

export default MovementsList;
