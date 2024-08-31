import axios from "axios"


export const getUserFromAPI = async () => {
    const users = []
    
    await axios.get('https://sadaneera-backend.vercel.app/api/users')
    .then(response => users.push(...response.data.users))
    .catch(err => {console.log(err)})
    console.log(users);
    return users
}

export const addUserToAPI = async (userData) => {
    try {
        const response = axios.post('http://localhost:5000/api/users/add',userData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const updateUserToAPI = async (user, id) => {
}

export const deleteUserFromAPI = async (id) => {
}