import React, { useEffect, useState } from "react";
import axios from "axios";
// import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";

const MovementsList = (props) => {
  // States
  const [movements, setMovements] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const editFunction = (obj) => {
    if (obj.id) {

    } else {
      console.log('Error: No ID provided for editing');
    }
  };

  const deleteFunction = (id) => {
    if (id) {
      axios.delete(`/movements/${id}`);
      setTrigger(prev => prev + 1);
    } else {
      console.log('Error: No ID provided for deleting');
    }
  };

  // Load movements from database
  useEffect(() => {
    async function getMovementData() {
      try {
        const rawData = await axios.get("/movements");
        const { data } = rawData;
        // Grab initial list of movements
        const initialMovements = data.map((movement) => {
          console.log("Movement is ... ", movement);
          return <MovementRow data={movement} key={movement.id} editFunction={editFunction} deleteFunction={deleteFunction} />;
        });
        if (initialMovements.length) {
          setMovements(initialMovements);
        } else {
          setMovements(<tr><td colSpan="6">There are no movements in the database.</td></tr>)
        }
      } catch (err) {
        console.log("Error: ", err.message);
      }
    }
    getMovementData();
  }, [trigger]);

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
            <th>-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>{movements}</tbody>
      </table>
      <button onClick={createMovement}>Create New Movement</button>
    </div>
  );
};

export default MovementsList;
