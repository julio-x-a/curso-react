import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  add() {
    this.setState({
      count: this.state.count + 1
    });
  }
  substract() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES6</h2>
        <h3>{this.state.count}</h3>
        <nav>
          <button onClick={this.add}>➕</button>
          <button onClick={this.substract}>➖</button>
        </nav>
      </div>
    );
  }
}

/*------------------------------------------*/

export class EventosES7 extends Component {
  state = {
    count: 0
  };

  add = (e) => {
    this.setState({
      count: this.state.count + 1
    });
  };
  substract = (e) => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES7</h2>
        <h3>{this.state.count}</h3>
        <nav>
          <button onClick={this.add}>➕</button>
          <button onClick={this.substract}>➖</button>
        </nav>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

/*------------------------------------*/

export class MasEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Más Eventos</h2>
        <button onClick={(e) => this.handleClick(e, 'Mensaje')}>Saludo</button>
        {/* Evento Personalizado */}
        <Boton myOnClick={(e) => this.handleClick(e, 'Hola')} />
      </div>
    );
  }
}
