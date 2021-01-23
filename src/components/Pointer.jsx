import React from 'react';

const Pointer = (props) => {
  return (
  <div className={"pointer " + props.id}>
    {props.text}
  </div>
  );
};

export default Pointer;