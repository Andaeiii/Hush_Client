const reducer = (posts = [], action) => {  //always initialize the state(posts) to an empty array.. 

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;
            break;

        case 'CREATE_POST':
            return [...posts, action.payload];
            return posts;
            break;

        default:
            return posts;

    }

}


//export the reducer... 
export default reducer;