import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthUser = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('currentUser'))

  const authenticate = useCallback(()=>{
    if(currentUser){
      console.log('Authentication successful')      
    }else{
      setCurrentUser(false)
      navigate('/login')
    }
  },[navigate, currentUser, setCurrentUser])

  useEffect(()=>{
    authenticate()
  },[authenticate])
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthUser