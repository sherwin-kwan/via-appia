import logo from '../logo.svg';
import '../stylesheets/App.scss';
import Map from './Map';
import MovementsList from './MovementsList';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        VIA APPIA
      </header>
      <main>
        <MovementsList />
        <Map />
      </main>
    </div>
  );
}

export default App;
