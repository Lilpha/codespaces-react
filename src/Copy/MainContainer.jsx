import React from "react";
import ImageList from './ImageList'

const styles = {
    inlineElem :{display:'inline-block'}
}

function MainContainer(props){

    return(
        <div style={{width:'50vw'}}>
        <ImageList/>
        </div>
        
    );

}


export default MainContainer;