import React from "react"
import { Map, MapInfoWindow } from "react-kakao-maps-sdk"
import { render } from "@testing-library/react";

var text = 'https://www.google.co.kr/maps/place/%EC%97%90%EC%9D%B4%EC%B9%98%EC%97%90%EB%B9%84%EB%89%B4%ED%98%B8%ED%85%94+%EC%9D%B4%EB%8C%80%EC%A0%90/data=!4m17!1m7!3m6!1s0x357c99bd7b06f5f9:0xa292cc959edb4664!2z7ISc7Jq47J2Y7KeR!8m2!3d37.5592806!4d126.939512!16s%2Fg%2F11vlhfthml!3m8!1s0x357c98974d3cb641:0xf79c14e3b13cd3e8!5m2!4m1!1i2!8m2!3d37.5561936!4d126.9425616!16s%2Fg%2F11fxb8k1jk?hl=ko&entry=ttu'
var url = text.split('/',6);
console.log(decodeURIComponent(url[5]))

export const list =[
    {
        url:'https://www.google.co.kr/maps/place/%EC%9E%90%EC%9E%91%EB%8F%84%ED%95%B4%EB%B3%80/data=!4m6!3m5!1s0x5fd894db4b106483:0xee28a83305d68928!8m2!3d38.3087232!4d128.5427113!16s%2Fg%2F119w1h5c_?hl=ko&entry=ttu',
        lat:'35.450701',
        lng:'126.570667',
        info : "test 1"
    },
    {
        lat:'33.450701',
        lng:'126.570667',
        info : "test 2"
    },
    {
        lat:'37.5418281',
        lng:'126.948357',
        info:'text3'
    },
    {
        url:'https://www.google.co.kr/maps/place/%EC%9E%90%EC%9E%91%EB%8F%84%ED%95%B4%EB%B3%80/data=!4m6!3m5!1s0x5fd894db4b106483:0xee28a83305d68928!8m2!3d38.3087232!4d128.5427113!16s%2Fg%2F119w1h5c_?hl=ko&entry=ttu',
        lat:'35.450701',
        lng:'126.570667',
        info : "test 1"
    }

];
console.log(list[0].url.split('!',9)[5])
console.log(list[0].url.split('!',9)[4])
console.log(decodeURIComponent(list[0].url.split('/',6)[5]))


function ImageMarker(props) {
    return (
        null
    );
}
export default list;