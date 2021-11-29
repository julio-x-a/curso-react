import React, { Component } from 'react';
import data from '../helpers/data.json';

function ListElement(props) {
  return (
    <li>
      <a href={props.element.web}>{props.element.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de Elementoss</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((season) => (
            <li key={season}>{season}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JS</h3>
        <ul>
          {data.frameworks.map((element) => (
            <ListElement key={element.id} element={element} />
          ))}
        </ul>
      </div>
    );
  }
}
