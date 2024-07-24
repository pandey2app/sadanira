import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import NotFound from '../pages/NotFound';
import Testimonial from '../layouts/Testimonial';
import Join from '../pages/Join';
import Members from '../pages/Members';
import Sadaneera from '../pages/Sadaneera';
import Aarogyam from '../pages/Aarogyam';
import Kabaddi from '../pages/Kabaddi';
import ReadingMarathon from '../pages/ReadingMarathon';
import Creaters from '../pages/Creaters';
import Categories from '../pages/Categories';

const Router = () => {
  return (

    // front routes
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/members" element={<Members />} />
      <Route path="/join" element={<Join />} />
      <Route path="/testimonial" element={<Testimonial />} />

      <Route path="events" element={<Events />} >
        <Route path="sadaneera-mahotsav" element={<Sadaneera />} />
        <Route path="kabaddi-pratiyogita" element={<Kabaddi />} />
        <Route path="aarogyam" element={<Aarogyam />} />
        <Route path="reading-marathon" element={<ReadingMarathon />} />
      </Route>

      <Route path='creaters' element={<Creaters type='all'/>}>
          <Route path='writers' element={<Creaters type='writers' />}/>
          <Route path='poets' element={<Creaters type='poets' />}/>
          <Route path='singers' element={<Creaters type='singers' />}/>
          <Route path='actors' element={<Creaters type='actors' />}/>
      </Route>

      <Route path='categories' element={<Categories type='all'/>}>
          <Route path='writers' element={<Categories type='writers' />}/>
          <Route path='poets' element={<Categories type='poets' />}/>
          <Route path='singers' element={<Categories type='singers' />}/>
          <Route path='actors' element={<Categories type='actors' />}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router