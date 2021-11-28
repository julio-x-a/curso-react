import React, { Component } from 'react';

//Clase
// class Componente extends Component {
//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

//Function
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

//Función expresada
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;
