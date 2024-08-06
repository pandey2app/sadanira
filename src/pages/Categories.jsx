import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StoryCard from '../layouts/StoryCard'

const Categories = () => {
    const type = useParams().type ?? 'all'

    useEffect(()=>{
        console.log(type)
    },[type])
    return (
        <>
            <StoryCard />
        </>
    )
}

export default Categories