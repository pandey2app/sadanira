import { useDispatch } from "react-redux"
import { logoutUserStart } from "../redux/actions/user.action"
import { useEffect } from "react"

const useLogout = () => {
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        dispatch(logoutUserStart())        
    },[dispatch])

    return true;
}

export default useLogout