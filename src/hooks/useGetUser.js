import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart } from '../redux/actions/user.action'
import { useLocation, useNavigate } from 'react-router-dom'

const useGetUser = () => {
    const path = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)
    const getUserErrorMessage = useSelector(state => state.user.getUserErrorMessage)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const getUser = useCallback(() => {
        dispatch(getUserStart())
    }, [dispatch])

    useEffect(() => {
        
        if(localStorage.getItem('isLoggedIn') && path.pathname !== '/') {
            getUser()
        }else{

        }
    }, [getUser, isLoggedIn, navigate, path]);

    if(user.name){
        return user
    }else if(getUserErrorMessage === 'Session expired please Login'){
        localStorage.removeItem("isLoggedIn")
        return null;
    }
}

export default useGetUser