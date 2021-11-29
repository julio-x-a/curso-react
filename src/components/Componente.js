import React, { Component } from 'react';

//Componente basado en Clase
// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

//Componente funcional
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

//Componente con función expresada
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;
