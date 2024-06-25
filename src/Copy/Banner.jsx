import React, {useState} from "react";
import {useRef} from "react";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import SingUpModal from "./bootstrap/SingUpModal";
import StaticModal from "./bootstrap/StaticModal";
import { ButtonGroup } from "react-bootstrap";

//https://velog.io/@moolbum/%EC%B2%B4%ED%81%AC%ED%95%9C%EA%B2%83-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A0%8C%EB%8D%94%ED%95%98%EA%B8%B0
const styles = {
  wrapper: {
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "25px",
    height: "25px",
  },
  options: {
    padding: "5px",
    display: "flex",
    border: "1px solid grey",
    borderRadius: "10px",
    alignItems: "center",
  },
  flexItems: { display: "flex", justifyContent: "space-around" },
  divText:{
    padding:'5px'
  }
};


function Banner(props) {
  const var1 = {
    title : 'This is Title',
    body : 'This is Body'
  }
const [content, setContent] = useState();

function handleEvent(){
  setContent(<StaticModal title={var1.title} body={var1.body}/>);
}
const [singUpModalOn, setSignModalOn] = useState(false);
  return (
    
    <div style={styles.wrapper}>
    <SingUpModal show={singUpModalOn} onHide={ ()=> setSignModalOn(false)}/>
    
                
      <Button variant="primary" onClick={() => setSignModalOn(true)}>Admin</Button>
      </div>
  );
}

export default Banner;
