import axios from "axios"


export const getUsersFromAPI = async () => {
    const users = []
    
    await axios.get(`${process.env.REACT_APP_ROOT_ADDRESS}/users`, {
        withCredentials: true
    })
    .then(response => users.push(...response.data.users))
    .catch(err => {return err})
    return users
}