import axios from "axios"


export const getUserFromAPI = async () => {
    const users = []
    
    await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/users`, {
        withCredentials: true
    })
    .then(response => users.push(...response.data.users))
    .catch(err => {return err})
    return users
}

export const addUserToAPI = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ROOT_ADDRESS}/users/add`, userData, {
            withCredentials: true
        });
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
        const response = await axios.post(`${process.env.REACT_APP_ROOT_ADDRESS}/users/login`, user, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {        
        let message = `Error logging in user: ${error.response? error.response.data.error : error.message}`;
        throw message;
    }
}