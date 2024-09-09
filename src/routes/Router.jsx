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
import ContactUsMessages from '../pages/admin/ContactUsMessages';
import Auth from '../pages/admin/Auth';
import Login from '../pages/Login';
import Logout from '../helpers/Logout';
import AuthUser from '../pages/user/AuthUser';
import ProfileDashboard from '../pages/user/ProfileDashboard';
import ContactUsMessageView from '../pages/admin/ContactUsMessageView';

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
      <Route path="/login" element={<Login />} />
      <Route path="/testimonial" element={<Testimonial />} />

      <Route path="events" element={<Events />} >
        <Route path="sadaneera-mahotsav" element={<Sadaneera />} />
        <Route path="kabaddi-pratiyogita" element={<Kabaddi />} />
        <Route path="aarogyam" element={<Aarogyam />} />
        <Route path="reading-marathon" element={<ReadingMarathon />} />
      </Route>

      <Route path='creaters/:type?' element={<Creaters />} />

      <Route path='category/:type?' element={<Categories />} />

      <Route path="admin" element={<Auth />}>
        <Route path="contact-us-messages" element={<ContactUsMessages />} />
        <Route path="contact-us-messages/:id" element={<ContactUsMessageView />} />
      </Route>

      <Route path='user' element={<AuthUser />}>
        <Route path='profile-page' element={<ProfileDashboard />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router