import * as api from '../api/index'; //import everything - api.fetchPosts.. 

//Action Creators... 

export const getPosts = () => async (dispatch) => {            //async(dispatch) ~ from redux-thunk.
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });  //payload is usually the data where we store all our posts...
    } catch (error) {
        console.log(error.message)
    }
};


/*

    //if you are not loading asynchronous data...

    const getPosts = () => {
        const action = { type: 'FETCH_ALL', payload: data };
        return action.
    }



*/


//action creators - are actions that return functions.... 
