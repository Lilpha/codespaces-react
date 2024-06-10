import React from "react";
import ImageList from "./ImageList";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const styles = {
  inlineElem: { display: "inline-block" },
};

function MainContainer(props) {
  return (
    <div style={{ width: "50vw" }}>
      <ImageList />
      <div>
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
      </div>
    </div>
  );
}

export default MainContainer;
