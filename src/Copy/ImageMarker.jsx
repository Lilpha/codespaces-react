import React from "react"
import { Map, MapInfoWindow } from "react-kakao-maps-sdk"
import { render } from "@testing-library/react";

const list =[
    {
      
        lat:'37 32 30.6',
        lng:'126 56 52.1'
    } 
];


function ImageMarker(props) {
    return (
        <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
        position={{
        lat: '37 32 30.6',
        lng: '126 56 52.1',
        }}
        removable={true}>
        <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
      </MapInfoWindow>
    );
}
export default ImageMarker;