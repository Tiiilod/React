import React from 'react';

const Text = ({ children, style }) => (
  <p style={{ ...style, color: '#333', fontSize: '14px', marginTop: '0' }}>
    {children}
  </p>
);


let x = 10;
if (true) {
let x = 20;
console.log(x);
}
console.log(x);


export default Text;
