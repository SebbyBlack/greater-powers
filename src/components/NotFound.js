import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    color: "rgb(176, 134, 67)",
    fontSize: "36px",
    textAlign: "center",
   
   
}

const divStyles = {
    display: "flex" ,
    flexDirection: "column" ,
    justifyContent: "center" ,
    height: "200px",
   
}

const pStyles = {
    color: "rgb(176, 134, 67)",
    fontSize: "24px",
    textAlign: "center",  
    textDecoration: "underline" ,
    marginTop: "10px",
    cursor: "pointer"
}
const NotFound = () => {
    return (
        <div style={divStyles}>
            <h1 style={styles}> We're sorry but the link you have clicked on is not finished.</h1>
            <Link to="/astral-index">
            <p style={pStyles}> Back to Astral Index Page</p>
            </Link>
        </div>
    )
}

export default NotFound
