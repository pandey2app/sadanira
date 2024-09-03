import { useDispatch } from "react-redux";
import { logoutUserStart } from "../redux/actions/user.action";
import { useCallback, useEffect } from "react";
import useGetUser from "../hooks/useGetUser";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useGetUser()

    if (!user) {
        navigate('/login')
    }

    const logOutHandler = useCallback(() => {
        dispatch(logoutUserStart())
        localStorage.removeItem('isLoggedIn');
        setTimeout(() =>{
            navigate('/login')
        },500)
    }, [dispatch, navigate])

    useEffect(() => {
        logOutHandler()
    }, [logOutHandler])
}

export default Logout