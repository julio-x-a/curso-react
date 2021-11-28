import React from 'react';
import PropTypes from 'prop-types';

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.default}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? 'true' : 'false'}</li>
        <li>{props.array.join(', ')}</li>
        <li>{`name : ${props.obj.name}`}</li>
        <li>{props.array.map(props.function)}</li>
        <li>{props.reactElement}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  default: 'Las Props'
};

Propiedades.propTypes = {
  number: PropTypes.number
};
