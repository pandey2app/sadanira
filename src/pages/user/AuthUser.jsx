import React, { useCallback, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthUser = () => {
  const navigate = useNavigate()

  const authenticate = useCallback(()=>{
    if(!localStorage.getItem('isLoggedIn')){
      navigate('/login')
    }
  },[navigate])

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