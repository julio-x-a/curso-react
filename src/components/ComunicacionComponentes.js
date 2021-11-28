import React, { Component } from 'react';

export default class Padre extends Component {
  state = {
    count: 0
  };

  increaseCount = (e) => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <h3>Count: {this.state.count}</h3>
        <Hijo msg="Mensaje para el componente hijo"></Hijo>
        <Hijo
          increaseCount={this.increaseCount}
          msg="Mensaje para el componente hijo"
        ></Hijo>
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.increaseCount}>➕</button>
    </>
  );
}
