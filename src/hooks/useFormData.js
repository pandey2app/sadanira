import { useState } from "react";
import { indianArtFormsByCategory } from "../forms/data/artOfCategories";

export const useFormData = (initialState, ref) => {

    const [formData, setFormData] = useState(initialState)
    const [arts, setArts] = useState([])

    const inputChange = (e) => {
        // Show/hide 'User art' field based on selected category
        if(e.target.name === 'userCategory' && e.target.value !== 'reader'){
            ref.current.classList.remove('visually-hidden')
            setArts([...indianArtFormsByCategory[e.target.value]])
        }else{
            ref.current.classList.add('visually-hidden')
            setArts([])
        }

        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }))
        console.log(formData);
    };

    
    return [formData, setFormData, inputChange, arts]
}