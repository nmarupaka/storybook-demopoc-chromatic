import React from 'react';
import './Input.css';

function Input(props) {
  const { size = 'medium', ...rest } = props;
  return <input className={`input ${size}`} {...rest}></input>;
      // "chromatic": "npx chromatic --project-token=fef05b9caa9c"
}

export default Input;
