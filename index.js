// react-button-library/src/Button.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
 
const HelloWorld = () => {
  const [color, setColor] = useState('blue');
 
  const changeColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };
 
  return (
    <Wrapper>
        <button style={{ backgroundColor: color }} onClick={changeColor}>
        Click me
        </button>
    </Wrapper>
  );
};
 
export default HelloWorld;