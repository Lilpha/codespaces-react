import React from "react"

const styles = {
    wrapper :{
        width:750 ,
        margin : 8,
        padding : 8,
        border : "1px solid grey",
        borderRadius : 16,
    },
    image:{
        textAligin:"center"
    },
    price: {
        color : "black",
        fontSize :16
    },
    detail: {
        color : "black",
        fontSize :13
    }
    
}
function ImageHolder(props){
    return(
            <div style={styles.wrapper}>
                <div  style={styles.image} >
                    <img src={props.image} alt="image"/>
                </div>
                <h3 style={styles.name}> {props.name} </h3>
                <div style={styles.detail}> {props.detail} </div>
                <div style={styles.price}> ₩{props.price}/박</div>
            </div>
    );
}

export default ImageHolder;