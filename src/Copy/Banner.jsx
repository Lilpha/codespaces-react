import React from "react";
import {useRef} from "react";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

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

function adminOnClick(){
  console.log('adminBtn has been clicked')
  /*버튼을 클릭하게 되면 중간에 창이 하나 생성되고.
  구글맵 url이랑 이름. 사진정도를 넣게 되면 ImageMaker에 들어가서 새로 생성되면 좋겠는데.*/
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

function Banner(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.flexItems}>
        <img
          style={styles.image}
          src={
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png"
          }
          alt="Airbnb Logo"
        />
      </div>
      <div style={styles.flexItems}>
        <div style={styles.options}>
          <div style={styles.divText}>청량리역</div>|<div style={styles.divText}>언제든 일주일</div>|<div style={styles.divText}>게스트 추가</div>
        </div>
      </div>

      <div style={styles.flexItems}>
        <div style={styles.divText}>당신의 공간을 에어비앤비하세요.</div>
        <img
          style={styles.image}
          src="https://png.pngtree.com/png-clipart/20230418/original/pngtree-globe-line-icon-png-image_9065393.png"
          alt="global"
        />
        <div style={styles.options}>
          <img
            style={styles.image}
            src="https://images.squarespace-cdn.com/content/v1/6537844b38646215677c2855/47912620-72f1-44a7-ba59-9ec6e03c03d4/hamburger+menu.png"
            alt="hamburgerIcon"
          />
          blank
          <img
            style={styles.image}
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="userIcon"
          />
        </div>        
        <Badge bg="secondary" as={Button} onClick={adminOnClick}>
            Admin
          </Badge>
      </div>
    </div>
  );
}

export default Banner;
