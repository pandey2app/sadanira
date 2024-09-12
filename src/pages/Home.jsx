import React, { useEffect } from 'react'
import Hero from '../layouts/Hero'
import AboutSection from '../layouts/AboutSection'
import FactSection from '../layouts/FactSection'
import ServicesSection from '../layouts/ServicesSection'
import EventsSection from '../layouts/EventsSection'
import TeamSection from '../layouts/TeamSection'
import JoinUs from '../layouts/JoinUs'
import TeamLead from '../layouts/TeamLead'
import Testimonial from '../layouts/Testimonial'
import { useSelector } from 'react-redux'
import CreatePost from '../layouts/CreatePost'
import Posts from '../layouts/Posts'

const Home = () => {
    const user = useSelector(state=> state.user.currentUser)

    useEffect(() =>{
    },[user])

    if(!user.name){
        return(
            <>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <FactSection />
                <EventsSection />
                <TeamSection />
                <JoinUs />
                <TeamLead />
                <Testimonial />
            </>
        )
    }
    return (
        <>
            <CreatePost />
            <Posts />
            {/* <TeamLead /> */}
        </>
    )
}

export default Home