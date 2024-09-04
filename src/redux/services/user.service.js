import axios from "axios"


export const getUserFromAPI = async () => { 
    try {
        const response = await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/user`, { withCredentials: true });
        
        return response.data.user;        
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error?.response?.data.error;
    }
}

export const getUserByIdFromAPI = async (id) => { 
    try {
        const response = await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/user/${id}`, { withCredentials: true });
        
        return response.data.user;        
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

export const addUserToAPI = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ROOT_ADDRESS}/user/add`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        let msg = `Error adding user: ${error.response ? error.response.data.error : error.message}`;
        throw msg;
    }
};

export const updateUserToAPI = async (user, id) => {
}

export const deleteUserFromAPI = async (id) => {
}

export const loginUserToAPI = async (user) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ROOT_ADDRESS}/user/login`, user, { withCredentials: true });
        console.log(response.data);
        
        return response.data;
    } catch (error) {        
        let message = `Error logging in user: ${error.response? error.response.data.error : error.message}`;
        throw message;
    }
}

export const logoutUserFromAPI = async (user) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/user/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {        
        let message = `Error logging out user: ${error.response? error.response.data.error : error.message}`;
        throw message;
    }
}