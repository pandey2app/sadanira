import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {
    const {type} = useParams()

    useEffect(()=>{
        console.log(type)
    },[type])
    return (
        <>
            <h1>{type}</h1>
        </>
    )
}

export default Categories