import { useEffect } from "react";
import useLogout from "../hooks/useLogout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    useLogout()
    const isLoggedIn = useSelector(state=> state.user.isLoggedIn)
    const navigate = useNavigate()


    useEffect(() => {
        if(!isLoggedIn){
            console.log('logged out successfully');
            navigate('/login')
            
        }
    }, [isLoggedIn, navigate])

    return null;
}

export default Logout