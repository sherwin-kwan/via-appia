import logo from "../logo.svg";
import React, { useState } from "react";
import "../stylesheets/App.scss";
import Map from "./Map";
import crudHelpers from "../helpers/crud";
import MovementsList from "./MovementsList";
import useDetailsScreen from "../helpers/useDetailsScreen";
import RouteList from './RouteList';

function App() {
  // States
  const [movements, setMovements] = useState([]);
  // Custom Hooks
  const detailsHook = useDetailsScreen();

  async function populateData() {
    const data = await crudHelpers().getMovementData();
    setMovements(data);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        VIA APPIA
      </header>
      <main>
        <MovementsList
          movements={movements}
          setMovements={setMovements}
          detailsHook={detailsHook}
          populateData={populateData}
        />
        <Map movements={movements} detailsHook={detailsHook} />
      </main>
      <footer>
        <RouteList movements={movements} />
      </footer>
    </div>
  );
}

export default App;
