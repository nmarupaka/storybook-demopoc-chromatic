import React from 'react';
import '../Center/Center.css';

function Center(props) {
  return <div className={`center`}>{props.children}</div>;
}

export default Center;
