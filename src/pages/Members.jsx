import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersStart } from '../redux/actions/users.action'
import UserProfileCard from '../layouts/UserProfileCard'

const Members = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  const getUsers = useCallback(() => {
    dispatch(getUsersStart())
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }, [dispatch])
  useEffect(() => {
    getUsers()
    if (users.length) {
      setLoading(false)
    }
  }, [getUsers, users])

  if(loading) return <h2 className='text-center text-danger'>Loading...</h2> 
  return (
    <>
      <section className='p-4 ' style={{ minHeight: "270px" }}>
        {
          users.length > 0 ?
            <h3 className='text-center px-2 mb-3 text-success text-bold'>Total {users.length} members are available now on sadaneera!</h3> :
            <h3 className='text-center px-2 mb-3 text-danger text-bold'>Sorry! No Active member available now on sadaneera!</h3>
        }
        <section className='d-flex gap-3 flex-wrap '>
          {
            users.length > 0 && users.map((member, index) => (
              <UserProfileCard key={index} creator={member} />
            ))
          }
        </section>
      </section>
    </>
  )
}

export default Members