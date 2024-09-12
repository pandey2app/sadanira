import { 
    ADD_POST_START, ADD_POST_SUCCESS, ADD_POST_ERROR, 
    GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_ERROR, 
    GET_POST_BY_ID_START, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_ERROR, 
    UPDATE_POST_START, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, 
    DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_ERROR, 
    LIKE_POST_START, LIKE_POST_SUCCESS, LIKE_POST_ERROR, 
    UNLIKE_POST_START, UNLIKE_POST_SUCCESS, UNLIKE_POST_ERROR 
} from "../constants/post.constant";

// Add post
export const addPostStart = (post) => ({
    type: ADD_POST_START,
    payload: { ...post }
});

export const addPostSuccess = (post) => ({
    type: ADD_POST_SUCCESS,
    payload: post
});

export const addPostError = (error) => ({
    type: ADD_POST_ERROR,
    payload: error
});

// Get all posts
export const getPostsStart = () => ({
    type: GET_POSTS_START
});

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
});

export const getPostsError = (error) => ({
    type: GET_POSTS_ERROR,
    payload: error
});

// Get post by ID
export const getPostByIdStart = (id) => ({
    type: GET_POST_BY_ID_START,
    payload: id
});

export const getPostByIdSuccess = (post) => ({
    type: GET_POST_BY_ID_SUCCESS,
    payload: post.data
});

export const getPostByIdError = (error) => ({
    type: GET_POST_BY_ID_ERROR,
    payload: error
});

// Update post
export const updatePostStart = (post, id) => ({
    type: UPDATE_POST_START,
    payload: {
        post,
        id
    }
});

export const updatePostSuccess = (post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: post
});

export const updatePostError = (error) => ({
    type: UPDATE_POST_ERROR,
    payload: error
});

// Delete post
export const deletePostStart = (id) => ({
    type: DELETE_POST_START,
    payload: id
});

export const deletePostSuccess = (id) => ({
    type: DELETE_POST_SUCCESS,
    payload: id
});

export const deletePostError = (error) => ({
    type: DELETE_POST_ERROR,
    payload: error
});

// Like post
export const likePostStart = (id) => ({
    type: LIKE_POST_START,
    payload: id
});

export const likePostSuccess = (post) => ({
    type: LIKE_POST_SUCCESS,
    payload: post
});

export const likePostError = (error) => ({
    type: LIKE_POST_ERROR,
    payload: error
});

// Unlike post
export const unlikePostStart = (id) => ({
    type: UNLIKE_POST_START,
    payload: id
});

export const unlikePostSuccess = (post) => ({
    type: UNLIKE_POST_SUCCESS,
    payload: post
});

export const unlikePostError = (error) => ({
    type: UNLIKE_POST_ERROR,
    payload: error
});
