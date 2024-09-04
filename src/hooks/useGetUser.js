import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart } from '../redux/actions/user.action'

const useGetUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const getUserErrorMessage = useSelector(state => state.user.getUserErrorMessage)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const getUser = useCallback(() => {
        dispatch(getUserStart())
    }, [dispatch])

    useEffect(() => {
        if(isLoggedIn && localStorage.getItem('isLoggedIn')){
            setTimeout(()=>{
                getUser()
            },500)
        }
    }, [getUser, isLoggedIn]);

    if(user.name){
        return user
    }else if(getUserErrorMessage === 'Session expired please Login'){
        localStorage.removeItem("isLoggedIn")
        return null;
    }
}

export default useGetUser