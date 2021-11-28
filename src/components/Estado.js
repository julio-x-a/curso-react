import React, { Component } from 'react';

function EstadoAHijo(props) {
  return (
    <div>
      <p>{props.childCount}</p>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El estado</h2>
        <p>{this.state.count}</p>
        <EstadoAHijo childCount={this.state.count} />
      </div>
    );
  }
}
