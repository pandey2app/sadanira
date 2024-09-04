import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart } from '../redux/actions/user.action'
import { useNavigate } from 'react-router-dom'

const useGetUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)
    const getUserErrorMessage = useSelector(state => state.user.getUserErrorMessage)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const getUser = useCallback(() => {
        dispatch(getUserStart())
    }, [dispatch])

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') && isLoggedIn){
            getUser()
        }else{
            localStorage.removeItem("isLoggedIn")
            navigate('/login')
            return null
        }
    }, [getUser, isLoggedIn, navigate]);

    if(user.name){
        return user
    }else if(getUserErrorMessage === 'Session expired please Login'){
        localStorage.removeItem("isLoggedIn")
        return null;
    }
}

export default useGetUser