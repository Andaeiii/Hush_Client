import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

import { useSelector } from 'react-redux';  //to fetch the data from the global redux store..

function Posts() {
    const posts = useSelector(store => store.posts); //either { state or store } //from the combineReducers({post:posts})
    const classes = useStyles();

    console.log(posts);

    //if theres no posts.length == 0 
    //Circlular Progress -> just a loading spinner.. 
    //else. 

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
