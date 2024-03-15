import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name : "김성호",
        comment:"안녕하세요, 성호입니다."
    },
    {
        name : "김자바",
        comment:"김자반 먹고싶다."
    },
    {
        name : "김급식",
        comment : "사실 급식은 무상이라서 좋은데"
    }
]

function CommentList(props){
    return (
        <div>
        {comments.map((comment)=> {
            return (
                <Comment name={comment.name} comment={comment.comment}/>
            );
        })}
        </div>
    )
}
export default CommentList;