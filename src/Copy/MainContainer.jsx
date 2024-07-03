//https://velog.io/@bangdori/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A9%94%ED%83%80-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B6%94%EC%B6%9C%ED%95%B4%EC%84%9C-Mapbox%EC%99%80-%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9%ED%95%98%EA%B8%B0

import React, {useState} from "react";

import ImageList from "./ImageList";
import SingUpModal from "./bootstrap/SingUpModal";


import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const styles = {
  inlineElem: { display: "inline-block" },
};

/*
const exifData = './sampleImage/20230308_142752.jpg'


const ImageWithExif = ({ imageUrl }) => {
  const [exifData, setExifData] = useState(null);

  useEffect(() => {
    const fetchExifData = async () => {
      try {
        const data = await exifr.parse(imageUrl);
        setExifData(data);
      } catch (error) {
        console.error('Error fetching EXIF data:', error);
      }
    };

    fetchExifData();
  }, [imageUrl]);
}

*/
function MainContainer(props) {
//const [singUpModalOn, setSignModalOn] = useState(false);
// exifr reads the file from disk, only a few hundred bytes.

console.log(data)
  return (
    <div style={{ width: "50vw" }}>
      <ImageList />
      </div>
  );
}

export default MainContainer;

