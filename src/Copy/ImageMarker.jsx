import React from "react"
import { Map, MapInfoWindow } from "react-kakao-maps-sdk"
import { render } from "@testing-library/react";
import GetLatLng from "./GetLatLng"


//console.log(decodeURIComponent(url[5]))

export const list =[
    {
        img:'https://a0.muscache.com/im/pictures/17af19bc-eb72-417c-8824-fbb44a06218b.jpg?im_w=720',
        url:'https://www.google.co.kr/maps/place/%EC%9E%90%EC%9E%91%EB%8F%84%ED%95%B4%EB%B3%80/data=!4m6!3m5!1s0x5fd894db4b106483:0xee28a83305d68928!8m2!3d38.3087232!4d128.5427113!16s%2Fg%2F119w1h5c_?hl=ko&entry=ttu',
        lat:'33.450701',
        lng:'126.570667',
        info : "test 1"
    },
    {   
        img:'https://a0.muscache.com/im/pictures/hosting/Hosting-1128902010827640927/original/60b308eb-1d33-431d-9b2a-73a692152cc5.jpeg?im_w=720',
        url:'https://www.google.co.kr/maps/place/%EC%86%8D%EC%B4%88%EB%93%B1%EB%8C%80/data=!4m6!3m5!1s0x5fd8bc0e94bdde21:0x9713df8d33326159!8m2!3d38.2136895!4d128.5999722!16s%2Fg%2F1tdvk045?hl=ko&entry=ttu',
        lat:'33.450701',
        lng:'126.570667',
        info : "test 2"
    },
    {
        img:'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjI3MjQxMzM%3D/original/5498d161-c2fb-462c-8f3b-d7eae180fd8e.jpeg?im_w=720',
        url : 'https://www.google.co.kr/maps/place/%EC%A0%9C%EC%9E%84%EC%8A%A4%EB%B8%94%EB%A3%A8/data=!4m9!3m8!1s0x5fd8bc7470d7f9a9:0x766ad580a9144668!5m2!4m1!1i2!8m2!3d38.207675!4d128.5933513!16s%2Fg%2F1pp2vcqk1?hl=ko&entry=ttu',
        lat:'37.5418281',
        lng:'126.948357',
        info:'text3'
    },
    {
        img:'https://a0.muscache.com/im/pictures/miso/Hosting-1118741114104832403/original/81bb8500-684c-4937-8463-42e7c782891c.jpeg?im_w=720',
        url:'https://www.google.co.kr/maps/place/%EC%9E%90%EC%9E%91%EB%8F%84%ED%95%B4%EB%B3%80/data=!4m6!3m5!1s0x5fd894db4b106483:0xee28a83305d68928!8m2!3d38.3087232!4d128.5427113!16s%2Fg%2F119w1h5c_?hl=ko&entry=ttu',
        lat:'35.450701',
        lng:'126.570667',
        info : "test 1"
    }

];

function ImageMarker(props) {
    return (
        null
    );
}
export default list;