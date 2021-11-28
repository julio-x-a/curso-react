import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="I'm a Component" />
          <hr></hr>
          <Propiedades
            cadena="String"
            number={23}
            boolean={true}
            array={[1, 2, 3]}
            obj={{ name: 'Julio', age: 23 }}
            function={(num) => num * num}
            reactElement={<i>Elemento React</i>}
            reactComponent={<Componente msg="Componente pasado como prop" />}
          />
          <hr></hr>
          <Estado />
          <hr></hr>
          <RenderizadoCondicional />
          <hr></hr>
          <RenderizadoElementos />
          <hr></hr>
          <EventosES6 />
          <hr></hr>
          <EventosES7 />
          <hr></hr>
          <MasEventos />
          <hr></hr>
          <ComunicacionComponentes />
        </section>
      </header>
    </div>
  );
}

export default App;
