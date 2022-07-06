import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams();

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data)
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getPostCommentsById(params.id);
        setComments(response.data)
    });

    console.log(comments)
    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, [])
    return (
        <div>
            <h1>Post id {params.id}</h1>
            {isLoading ? <MyLoader/> :
                <div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>}
            <h1>Comments</h1>
            <div>
                {isComLoading ? <MyLoader/> :
                    comments.length !== 0 ?
                    comments.map(c => <div key={c.id}>
                        <div>{c.email}</div>
                        <div>{c.body}</div>
                        <br/>
                    </div>)
                        :
                        <div>no comments</div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;