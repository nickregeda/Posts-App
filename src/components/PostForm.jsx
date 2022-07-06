import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''})

    const onPostChange = (e) => {
        // setTitle(e.target.value);
        setPost({...post, title: e.target.value})
    }

    const onBodyChange = (e) => {
        // setBody(e.target.value);
        setPost({...post, body: e.target.value})
    }

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        props.create(newPost);
        setPost({title: '', body: ''})
    }

    return (
        <form action="">
            {/*Управляемый компонент*/}
            <MyInput type="text" placeholder={'name'} value={post.title} onChange={onPostChange}/>
            <MyInput type="text" placeholder={'desc'} value={post.body} onChange={onBodyChange}/>
            {/*Неуправляемый комопнент*/}
            {/*<MyInput type="text" placeholder={'desc'} ref={bodyInputRef}/>*/}
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
};

export default PostForm;