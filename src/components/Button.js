import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

function Button(props) {
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );

  // let scale = 1
  // if (size === "sm") scale = 0.75
  // if (size === "lg") scale = 1.5
  // const style = {
  //   backgroundColor,
  //  // padding: `${scale * 0.5}rem ${scale * 1}rem`,
  //   border: "none",
  //    width:"55px !important",
  // //   color:"black",
  // //   padding:"15px 32px",
  // //   textalign: "center",
  // // textdecoration: "none",
  // // display:" inline-block",
  // }
}

export default Button;

// Button.propTypes = {
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   handleClick: PropTypes.func,
// }

// import React from 'react'
// import './Button.css'

// function Button(props){
//     const {variant,children,...rest}=props
//     return(<Button className={'button ${variant}'}{...rest}>
//         {children}
//     </Button>)
// }

// export default Button;
