import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import NotFound from '../pages/NotFound';
import Pages from '../pages/Pages';
import Testimonial from '../layouts/Testimonial';

const Router = () => {
    return (

    // front routes
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router