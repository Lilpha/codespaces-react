import React, {useState} from "react";

import ImageList from "./ImageList";
import SingUpModal from "./modals/SingUpModal";


import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

//const [singUpModalOn, setSignModalOn] = useState(false);

const styles = {
  inlineElem: { display: "inline-block" },
};

function MainContainer(props) {
  return (
    <div style={{ width: "50vw" }}>
      <SingUpModal show={true} onHide={true}/>
      <ImageList />
      <div>
      <Button variant="primary">Admin</Button>
      </div>
    </div>
  );
}

export default MainContainer;
