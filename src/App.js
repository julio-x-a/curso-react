import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Julio';
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
