import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Creaters = () => {
  const type = useParams().type ?? 'all'


  useEffect(()=>{
        console.log(type)

  },[type])
  return (
    <>
      <h1>{type}</h1>
    </>
  )
}

export default Creaters