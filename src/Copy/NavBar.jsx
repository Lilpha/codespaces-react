import React from "react";
import NavIcons from './NavIcons';

const list = [
    {
        image : 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
        text : "한적한 해변"
    },
    {
        image:"https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
        text:"서핑"
    },
    {
        image:"https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
        text:"료칸"
    },
    {
        image:"https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
        text:"이상한거"
    },
    {
        image:"https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
        text:"골프장"
    },
    {
        image:"https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
        text:"뭐더라"
    },

]

function NavBar(props){
    return(
        <div>
        {list.map((content)=> {
            return (
                <NavIcons image={content.image} text={content.text}/>
            );
        })}
        </div>
    )
}


export default NavBar;