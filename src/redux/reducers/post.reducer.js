import {
    ADD_POST_SUCCESS, ADD_POST_ERROR,
    GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_ERROR,
    UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
    DELETE_POST_SUCCESS, DELETE_POST_ERROR,
    LIKE_POST_SUCCESS, LIKE_POST_ERROR,
    UNLIKE_POST_SUCCESS, UNLIKE_POST_ERROR
} from "../constants/post.constant";

const initialState = {
    posts: [], // To store the list of all posts
    currentPost: {}, // To store the data of the single post being viewed/edited
    addPostError: null,
    updatePostError: null,
    deletePostError: null,
    likePostError: null,
    unlikePostError: null,
    getPostsErrorMessage: null,
    getPostByIdErrorMessage: null,
};

// Post Reducer
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add Post
        case ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts], // Add the new post to the existing list
            };
        case ADD_POST_ERROR:
            return {
                ...state,
                addPostError: action.payload,
            };

        // Get All Posts
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload, // Replace the list of posts with the newly fetched posts
                getPostsErrorMessage: null
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                getPostsErrorMessage: action.payload,
            };

        // Get Post by ID
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                currentPost: {...action.payload}, // Set the current post for viewing/updating
                getPostByIdErrorMessage: null
            };
        case GET_POST_BY_ID_ERROR:
            return {
                ...state,
                getPostByIdErrorMessage: action.payload,
            };

        // Update Post
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? action.payload : post
                ), // Update the post in the list
                currentPost: action.payload // Also update the current post if being viewed
            };
        case UPDATE_POST_ERROR:
            return {
                ...state,
                updatePostError: action.payload,
            };

        // Delete Post
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload), // Remove the deleted post from the list
                currentPost: {} // Clear current post if it's the one being deleted
            };
        case DELETE_POST_ERROR:
            return {
                ...state,
                deletePostError: action.payload,
            };

        // Like Post
        case LIKE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? action.payload : post
                ), // Update the post with new like data
                currentPost: action.payload // Also update the current post
            };
        case LIKE_POST_ERROR:
            return {
                ...state,
                likePostError: action.payload,
            };

        // Unlike Post
        case UNLIKE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? action.payload : post
                ), // Update the post with new unlike data
                currentPost: action.payload // Also update the current post
            };
        case UNLIKE_POST_ERROR:
            return {
                ...state,
                unlikePostError: action.payload,
            };

        // Default state if no matching action type
        default:
            return state;
    }
};
