import axios from "axios"


export const getUsersFromAPI = async () => {
    const users = []
    
    await axios.get(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/users`, {
        withCredentials: true
    })
    .then(response => users.push(...response.data.users))
    .catch(err => {return err})
    return users
}