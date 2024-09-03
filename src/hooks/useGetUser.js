import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart } from '../redux/actions/user.action'

const useGetUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    const getUser = useCallback(() => {
        dispatch(getUserStart())
    }, [dispatch])

    useEffect(() => {
        getUser()
    }, [getUser]);

    return user
}

export default useGetUser