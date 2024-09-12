import { put, takeLatest } from "redux-saga/effects";
import {
    ADD_POST_START, DELETE_POST_START, GET_POSTS_START, GET_POST_BY_ID_START,
    UPDATE_POST_START, LIKE_POST_START, UNLIKE_POST_START
} from "../constants/post.constant";

import {
    addPostError, deletePostError, getPostsError, getPostsSuccess, getPostByIdError, getPostByIdSuccess,
    updatePostError, likePostError, unlikePostError, likePostSuccess, unlikePostSuccess
} from "../actions/post.action";

import {
    addPostToAPI, deletePostFromAPI, getPostsFromAPI, getPostByIdFromAPI,
    updatePostToAPI, likePostToAPI, unlikePostFromAPI
} from "../services/post.service";


// Get all posts
function* getPosts() {
    try {
        const posts = yield getPostsFromAPI();
        yield put(getPostsSuccess(posts));
    } catch (error) {
        yield put(getPostsError(error.message));
    }
}

// Get post by ID
function* getPostById({ payload }) {
    try {
        const post = yield getPostByIdFromAPI(payload);
        yield put(getPostByIdSuccess(post));
    } catch (error) {
        yield put(getPostByIdError(error.message));
    }
}

// Add a new post
function* addPost({ payload }) {
    try {
        yield addPostToAPI(payload);
        yield put(getPosts());  // Fetch the latest posts after adding
    } catch (error) {
        yield put(addPostError(error.message));
    }
}

// Update a post
function* updatePost({ payload }) {
    try {
        yield updatePostToAPI(payload.post, payload.id);
        yield put(getPosts());  // Fetch updated list after successful update
    } catch (error) {
        yield put(updatePostError(error.message));
    }
}

// Delete a post
function* deletePost({ payload }) {
    try {
        yield deletePostFromAPI(payload);
        yield put(getPosts());  // Fetch the updated posts after deletion
    } catch (error) {
        yield put(deletePostError(error.message));
    }
}

// Like a post
function* likePost({ payload }) {
    try {
        const post = yield likePostToAPI(payload);
        yield put(likePostSuccess(post));
    } catch (error) {
        yield put(likePostError(error.message));
    }
}

// Unlike a post
function* unlikePost({ payload }) {
    try {
        const post = yield unlikePostFromAPI(payload);
        yield put(unlikePostSuccess(post));
    } catch (error) {
        yield put(unlikePostError(error.message));
    }
}

// Root post saga
export default function* post() {
    yield takeLatest(ADD_POST_START, addPost);
    yield takeLatest(GET_POSTS_START, getPosts);
    yield takeLatest(GET_POST_BY_ID_START, getPostById);
    yield takeLatest(UPDATE_POST_START, updatePost);
    yield takeLatest(DELETE_POST_START, deletePost);
    yield takeLatest(LIKE_POST_START, likePost);
    yield takeLatest(UNLIKE_POST_START, unlikePost);
}
