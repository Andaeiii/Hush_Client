import { combineReducers } from 'redux/redux';
import { postReducer } from 'postReducer';


export default combineReducers({
    posts: postReducer
});

