import axios from "axios"


export const getUserFromAPI = async () => {
    const users = []
    
    await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/users`)
    .then(response => users.push(...response.data.users))
    .catch(err => {return err})
    return users
}

export const addUserToAPI = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_ROOT_ADDRESS}/users/add`, userData);
        return response.data;
    } catch (error) {
        console.log('Error adding user:', error.response ? error.response.data.error.errorResponse : error.message+'mes');
        throw error?.response.data.error.errorResponse.errmsg;
    }
};

export const updateUserToAPI = async (user, id) => {
}

export const deleteUserFromAPI = async (id) => {
}