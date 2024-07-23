import '../App.css';
import React from 'react'
import ModalSearch from '../components/ModalSearch'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div class="container-fluid nav-bar">
                <div class="container">
                    <nav class="navbar navbar-light navbar-expand-lg py-2">
                        <Link to="/" class="navbar-brand">
                            {/* <h1 class="fw-bold mb-0 text-red">सदा<span class="text-dark">नीरा</span> </h1> */}
                            <img src="img/logo/header-text.png" height='60px' alt="Sadanira" />
                        </Link>
                        <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="fa fa-bars text-primary"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav font-monospace mx-auto mt-3">
                                <Link to="/" class="nav-item nav-link">Home</Link>
                                <Link to="/about-us" class="nav-item nav-link">About</Link>
                                <Link to="/events" class="nav-item nav-link">Events</Link>
                                <Link to="/gallery" class="nav-item nav-link">Gallery</Link>
                                <div class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</p>
                                    <div class="dropdown-menu bg-light">
                                        <Link to="book.html" class="dropdown-item">Booking</Link>
                                        <Link to="blog.html" class="dropdown-item">Our Blog</Link>
                                        <Link to="team.html" class="dropdown-item">Our Team</Link>
                                        <Link to="testimonial.html" class="dropdown-item">Testimonial</Link>
                                    </div>
                                </div>
                                <Link to="/contact-us" class="nav-item nav-link">Contact</Link>
                            </div>
                            <button class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button>
                            <Link href="join" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Join Now</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <ModalSearch />
        </>
    )
}

export default Navbar