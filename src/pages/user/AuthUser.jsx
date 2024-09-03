import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthUser = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))

  const authenticate = useCallback(()=>{
    if(!isLoggedIn){
      setIsLoggedIn(false)
      navigate('/login')
    }
  },[navigate, isLoggedIn])

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