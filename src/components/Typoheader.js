import React from "react";
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"


function Typoheader({children, type}){  

    return <Typography variant={type} style={{color:"black"}}>{children}</Typography>
};

Typoheader.propTypes = {
    type: PropTypes.string,
}

export default Typoheader;