import axios from "axios"


export const getContactUsFromAPI = async () => {
    const contactUs = []
    
    await axios.get(`/api//contactUs`)
    .then(response =>contactUs.push([...response.data]))
    .catch(err => {return err})
    return contactUs
}

export const addContactUsToAPI = async (contactUs) => {
    try {
        const response = await axios.post(`/api/contactUs/add`, contactUs);
        return response.data;
    } catch (error) {
        console.log('Error adding contact us:', error.response ? error.response.data.error.errorResponse : error.message);
        throw error?.response.data.error.errorResponse.errmsg;
    }
};

export const deleteContactUsFromAPI = async (id) => {
    try {
        await axios.get(`/api/contactUs/delete/${id}`);
    } catch (error) {
        console.log('Error deleting contact us:', error.response? error.response.data.error.errorResponse : error.message);
        throw error?.response.data.error.errorResponse.errmsg;
    }
}