const reducer = (posts = [], action) => {  //always initialize the state(posts) to an empty array.. 

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE_POST':
            return [...posts, action.payload];

        case 'UPDATE_POST':
            return posts.map(post => post._id == action.payload._id ? action.payload : post); //if posts._id is equal to payloads.id ~ then return action.payload(the updated post) else just the post no updates

        default:
            return posts;

    }

}


//export the reducer... 
export default reducer;