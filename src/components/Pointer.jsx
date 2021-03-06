import React from 'react';
import PropTypes from 'prop-types';

const Pointer = (props) => {
  console.log('Rendering a pointer');
  return (
  <div className={"pointer " + props.id} style={props.style}>
    {props.text}
  </div>
  );
};

Pointer.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default Pointer;