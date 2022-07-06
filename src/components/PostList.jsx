import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = (props) => {

    if (props.posts.length === 0) {
        return <div style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>No posts</div>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <TransitionGroup>
                {props.posts.map((p, index) =>
                    <CSSTransition key={p.id} timeout={500} classNames={'post'}>
                        <PostItem delete={props.delete} number={index + 1} post={p}
                                  />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;