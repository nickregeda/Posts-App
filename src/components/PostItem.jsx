import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate, useParams} from 'react-router-dom';

const PostItem = (props) => {

    const router = useNavigate()
    const deletePost = () => {
        props.delete(props.post)
    }

    return (
        <div className="post">
            <div className="post__container">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => {router(`/posts/${props.post.id}`)}}>Open</MyButton>
                <MyButton onClick={deletePost}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;