import React from "react";

const styles = {
    wrapper:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems :'center'
    },
    images : {
        width: '25px',
        height: '25px',
    
    },
    text:{
        fontSize : '20px',
    }
}

function NavIcons(props) {
    return(
        <div style={styles.wrapper}>
        <img style={styles.images}  src={props.image} alt="image"/>
        <div style={styles.text}>{props.text}</div>
        </div>
    );
}

export default NavIcons;