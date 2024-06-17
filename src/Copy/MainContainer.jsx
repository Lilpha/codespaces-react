import React, {useState} from "react";

import ImageList from "./ImageList";
import SingUpModal from "./bootstrap/SingUpModal";


import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const styles = {
  inlineElem: { display: "inline-block" },
};

function MainContainer(props) {
//const [singUpModalOn, setSignModalOn] = useState(false);

  return (
    <div style={{ width: "50vw" }}>
      <ImageList />
      </div>
  );
}

export default MainContainer;
