import * as api from '../../api/all';

export const getPosts = () => async (dispatch) => {

    try {

        const { data } = await api.getAllPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {

        console.log(error.message);

    }

}