import { useState } from "react";

export const useFormData = (initialState) => {

    const [formData, setFormData] = useState(initialState)

    const inputChange = (e) => {
        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }))
        console.log(formData);
    };

    
    return [formData, setFormData, inputChange]
}