import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const user = useSelector(state=> state.user.currentUser)

  const authenticate = useCallback(()=>{
    if(!localStorage.getItem('isLoggedIn')){
      navigate('/login')
    }
  },[navigate])

  useEffect(()=>{
    authenticate()
  },[authenticate])

  useEffect(()=>{
    console.dir(user);
    
  },[user])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Auth