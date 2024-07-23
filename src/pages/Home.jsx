import React from 'react'
import Hero from '../layouts/Hero'
import AboutSection from '../layouts/AboutSection'
import FactSection from '../layouts/FactSection'
import ServicesSection from '../layouts/ServicesSection'
import EventsSection from '../layouts/EventsSection'
import TeamSection from '../layouts/TeamSection'
import JoinUs from '../layouts/JoinUs'
import TeamLead from '../layouts/TeamLead'
import Testimonial from '../layouts/Testimonial'
import BlogSection from '../layouts/BlogSection'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <FactSection />
            <ServicesSection />
            <EventsSection />
            <TeamSection />
            <JoinUs />
            <TeamLead />
            <Testimonial />
            {/* <BlogSection /> */}
        </>
    )
}

export default Home