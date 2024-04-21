import React from "react";
import NavBar from './NavBar';
import ImageList from './ImageList'

const styles = {
    inlineElem :{display:'inline-block'}
}

function MainContainer(props){
    return(
        <div style={{width:'50vw'}}>
        <NavBar/>
        <ImageList/>
        </div>
        
    );

}


export default MainContainer;