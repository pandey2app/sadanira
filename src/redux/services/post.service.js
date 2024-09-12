import axios from 'axios';

export const addPostToAPI = (post) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/create`, post, { withCredentials: true });
};

export const getPostsFromAPI = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post`, { withCredentials: true });
        return response.data;
    } catch (error) {

    }
};

export const getPostByIdFromAPI = (id) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/${id}`, { withCredentials: true });
};

export const updatePostToAPI = (post, id) => {
    return axios.put(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/update/${id}`, post, { withCredentials: true });
};

export const deletePostFromAPI = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/delete/${id}`, { withCredentials: true });
};

export const likePostToAPI = (id) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/${id}/like`, { withCredentials: true });
};

export const unlikePostFromAPI = (id) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/post/${id}/unlike`, { withCredentials: true })
};
