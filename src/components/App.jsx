import logo from '../logo.svg';
import '../stylesheets/App.scss';
import Map from './Map';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        VIA APPIA
      </header>
      <main>
        <RoutesList />
        <Map />
      </main>
    </div>
  );
}

export default App;
