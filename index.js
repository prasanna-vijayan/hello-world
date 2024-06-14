// react-button-library/src/Button.js
import React, { useState } from 'react';
 
const HelloWorld = () => {
  const [color, setColor] = useState('blue');
 
  const changeColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };
 
  return (
    <button style={{ backgroundColor: color }} onClick={changeColor}>
      Click me
    </button>
  );
};
 
export default HelloWorld;