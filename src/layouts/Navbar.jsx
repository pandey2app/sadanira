import '../App.css';
import React from 'react'
import ModalSearch from '../components/ModalSearch'
import { Link } from 'react-router-dom'
import ToggleButton from '../components/ToggleButton';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bar">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand-lg py-2">
                        <Link to="/" className="navbar-brand">
                            {/* <h1 className="fw-bold mb-0 text-red">सदा<span className="text-dark">नीरा</span> </h1> */}
                            <img src="/img/logo/header-text.png" height='60px' alt="Sadanira" />
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav font-monospace mx-auto mt-3">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/about-us" className="nav-item nav-link">About</Link>
                                <div className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</p>
                                    <div className="dropdown-menu bg-light">
                                        <Link to="events/sadaneera-mahotsav" className="dropdown-item">Sadaneera Mahotsav</Link>
                                        <Link to="events/kabaddi-pratiyogita" className="dropdown-item">Ganwai Kabaddi Pratiyogita</Link>
                                        <Link to="events/aarogyam" className="dropdown-item">Aarogyam 'free medical camp'</Link>
                                        <Link to="events/reading-marathon" className="dropdown-item">Reading Marathon</Link>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Creaters</p>
                                    <div className="dropdown-menu bg-light">
                                        <Link to="creaters" className="dropdown-item">All</Link>
                                        <Link to="creaters/writers" className="dropdown-item">Writers</Link>
                                        <Link to="creaters/poets" className="dropdown-item">Poets</Link>
                                        <Link to="creaters/singers" className="dropdown-item">Singers</Link>
                                        <Link to="creaters/actors" className="dropdown-item">Actors</Link>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</p>
                                    <div className="dropdown-menu bg-light">
                                        <Link to="category" className="dropdown-item">All</Link>
                                        <Link to="category/story" className="dropdown-item">Story</Link>
                                        <Link to="category/poem" className="dropdown-item">Poem</Link>
                                        <Link to="category/nibandh" className="dropdown-item">Nibandh</Link>
                                        <Link to="category/jivani" className="dropdown-item">Jivani</Link>
                                    </div>
                                </div>
                                <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                                <Link to="/members" className="nav-item nav-link">Members</Link>
                            </div>
                            <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                            <ToggleButton first='Login' second="Join-Us" firstLink={'/login'} secondLink={'/join'} />
                        </div>
                    </nav>
                </div>
            </div>
            <ModalSearch />
        </>
    )
}

export default Navbar