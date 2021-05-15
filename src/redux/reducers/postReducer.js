const postReducer = (posts = [], action) => {  //posts = states.. 

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;
            break;

        case 'CREATE_POST':
            return posts;
            break;

        default:
            return posts;
    }

}

export default postReducer;