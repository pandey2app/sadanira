import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStart } from '../redux/actions/user.action'
import UserProfileCard from '../layouts/UserProfileCard'

const Members = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users)

  const getUsers = useCallback(() => {
    dispatch(getUserStart())
  }, [dispatch])
  useEffect(() => {
    getUsers()
  }, [getUsers])
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