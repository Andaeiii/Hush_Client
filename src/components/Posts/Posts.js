import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

import { useSelector } from 'react-redux';  //to fetch the data from the global redux store..

function Posts() {
    const posts = useSelector(store => store.posts); //either { state or store } //from the combineReducers({post:posts})
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />

        </>
    )
}

export default Posts
