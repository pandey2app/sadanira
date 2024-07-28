import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserProfileCard from '../layouts/UserProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCreatorStart } from '../redux/actions/creator.action'


const Creaters = () => {
  const dispatch = useDispatch();
  const creators = useSelector((state) => state.creator.creators)
  const type = useParams().type ?? 'all'
  const [filteredCreators, setFilteredCreators] = useState([])
  
  useMemo(()=>{
    dispatch(getCreatorStart())
  },[dispatch])

  const filterCreators = useCallback(() => {
    setFilteredCreators([...creators])
    if (type.toLowerCase() === 'poets') {
      setFilteredCreators(creators.filter((creator) => creator.artform.toLowerCase() === 'poet'))
    }
    if (type.toLowerCase() === 'writers') {
      setFilteredCreators(creators.filter((creator) => creator.artform.toLowerCase() === 'writer'))
    }
    if (type.toLowerCase() === 'singers') {
      setFilteredCreators(creators.filter((creator) => creator.artform.toLowerCase() === 'singer'))
    }
    if (type.toLowerCase() === 'actors') {
      setFilteredCreators(creators.filter((creator) => creator.artform.toLowerCase() === 'actor'))
    }
  }, [type, creators]);
  
  useEffect(() => {
    filterCreators()
  }, [type, filterCreators])

  return (
    <section className='p-4 '>
      <h3 className='text-center px-2 mb-3 text-success text-bold'>Total {filteredCreators.length} {type === 'all'? 'Creators': type} are available now on sadaneera!</h3>
      <section className='d-flex gap-3 flex-wrap'>
        {
          filteredCreators.length && filteredCreators.map((creator, index) => (
            <UserProfileCard key={index} creator={creator} />
          ))
        }
      </section>
    </section>
  )
}

export default Creaters