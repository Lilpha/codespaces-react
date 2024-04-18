import React from "react";
import ImageList from './ImageList'
import NavBar from './NavBar';

function MainContainer(props){
    return(
        <div>
            <NavBar/>
            <ImageList/>
        </div>
    );

}


export default MainContainer;