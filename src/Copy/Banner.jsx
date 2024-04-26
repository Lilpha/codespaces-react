
import React from "react"

const styles = {
    wrapper :{
        margin: '20px',
        display:'flex',
        justifyContent:'space-around',
        aliginItems:'center'
    },
    image :{
    width:'25px',
    height:'25px'
    },
    options:{
        display:'inline-block',
        border : "1px solid grey",
        
    }
    
}
function Banner(props){
    return(
            <div style={styles.wrapper}>
                <img style={styles.image}  src={'https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png'} alt="Airbnb Logo"/>
                <div style={styles.wrapper}>
                    <div style={styles.options}>홍대입구</div>
                    <div style={styles.options}>언제든 일주일</div>
                    <div style={styles.options}>게스트 추가</div>
                </div>
                <div>
                    당신의 공간을 에어비앤비하세요.
                </div>
            </div>
    );
}

export default Banner;
