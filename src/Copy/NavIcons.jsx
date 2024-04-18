import React from "react";

const styles = {
    wrapper:{
        width:'20px',
        height:'20px'
    },
    images : {
        width: '15px',
        height: '15px',
        
    }
}

function NavIcons(props) {
    return(
        <div style={styles.wrapper}>
        <img style={styles.image}  src={props.image} alt="image"/>
        <span>{props.text}</span>
        </div>
    );
}