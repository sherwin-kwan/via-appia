import logo from "../logo.svg";
import React, { useState } from "react";
import "../stylesheets/App.scss";
import Map from "./Map";
import crudHelpers from "../helpers/crud";
import MovementsList from "./MovementsList";
import useDetailsScreen from "../helpers/useDetailsScreen";
import RouteList from "./RouteList";

function App() {
  // States
  const [movements, setMovements] = useState([]);
  const [page, setPage] = useState("MOVEMENT");
  // Custom Hooks
  const detailsHook = useDetailsScreen();

  async function populateData() {
    const data = await crudHelpers().getMovementData();
    setMovements(data);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>VIA APPIA: Get all your shipments in order!</p>
        <p onClick={() => setPage("MOVEMENT")} className={page === "MOVEMENT" ? "highlight" : ""}>Movements</p>
        <p onClick={() => setPage("ROUTE")} className={page === "ROUTE" ? "highlight" : ""}>Route</p>
      </header>
      {page === "MOVEMENT" && (<main>
        <MovementsList
          movements={movements}
          setMovements={setMovements}
          detailsHook={detailsHook}
          populateData={populateData}
        />
        <Map movements={movements} detailsHook={detailsHook} />
      </main>)}
      {page === "ROUTE" && (<main>
        <RouteList movements={movements} />
      </main>)}
      <footer></footer>
    </div>
  );
}

export default App;
