import React from "react"
import ImageHolder from "./ImageHolder"
import { render } from "@testing-library/react";

const list =[
    {
        image : "https://a0.muscache.com/im/pictures/17af19bc-eb72-417c-8824-fbb44a06218b.jpg?im_w=720",
        name : "연희동",
        detail : "New 핫플레이스  연희동! 40년 역사의 여관을 새롭게 리모델링하여 깨끗하고 쾌적한 호텔형 에어비엔비 운영중.",
        price : "62,000",
        lat:'37 32 30.6',
        lng:'126 56 52.1'
    },
    {
        image : "https://a0.muscache.com/im/pictures/hosting/Hosting-1128902010827640927/original/60b308eb-1d33-431d-9b2a-73a692152cc5.jpeg?im_w=720",
        name : "서울의 집",
        detail : "서울시 동대문 옆 낙산성관길에 위치해 있는 고즈넉한 전통 한옥 입니다:) 한옥의 멋을 최대한 살려 리모델링을 하여 거주시에도 편안함을 느낄 수 있는 한옥 입니다",
        price : "602,100",
        location:'37 32 30.6',
        lng :'126 56 54.1'
    },{
        image : "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjI3MjQxMzM%3D/original/5498d161-c2fb-462c-8f3b-d7eae180fd8e.jpeg?im_w=720",
        name : "가회동",
        detail : "서울의하루 가회동  집은 북촌의 전망이 한 눈에 내려다보이는 곳에 위치해있습니다.  최대 4인만 입장가능하며 다른 게스트들과 공유하지 않는 독채 한옥입니다. ",
        price : "324,094",
        location:'37 32 30.6',
        lng :'126 56 56.1'
    },{
        image : "https://a0.muscache.com/im/pictures/miso/Hosting-1118741114104832403/original/81bb8500-684c-4937-8463-42e7c782891c.jpeg?im_w=720",
        name : "서울의 방",
        detail : "밥과 라면을 제공합니다. 물을 이용하실 수 있는 정수기와 얼음도 제공합니다. 깨끗하고 쾌적하게 이용하실 수 있게 최선을 다하겠습니다.",
        price : "25,104",
        location:'37 32 30.6',
        lng :'126 56 50.1'
    },    
];

function ImageList(props) {
    return (
        <div>
        {list.map((content)=> {
            return (
                <ImageHolder image={content.image} name={content.name} detail={content.detail} price={content.price} location={content.lat} lng={content.lng}/>
            );
        })}
        </div>
    );
}
export default ImageList;