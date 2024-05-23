import React from "react"
import { Map, MapInfoWindow } from "react-kakao-maps-sdk"
import { render } from "@testing-library/react";

export const list =[
    {
        lat:'35.450701',
        lng:'126.570667',
        info : "test 1"
    },
    {
        lat:'33.450701',
        lng:'126.570667',
        info : "test 2"
    } 
];


function ImageMarker(props) {
    return (
        null
    );
}
export default list;