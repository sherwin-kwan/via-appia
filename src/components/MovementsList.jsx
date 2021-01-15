import React from "react";
import movementsData from "../data/movements.json";
import MovementRow from "./MovementRow";

const MovementsList = (props) => {
  const movements = movementsData.map((movement) => {
    console.log("Movement is ... ", movement);
    return <MovementRow data={movement} />;
  });
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
    </div>
  );
};

export default MovementsList;
