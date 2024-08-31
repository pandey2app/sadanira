import React from 'react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
    return (
        <div className="container-fluid service py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Initiatives</small>
                    <h1 className="display-5 mb-5">Contributions to Literary and Educational Development</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-people-arrows fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Literary Discussion</h4>
                                    <p className="mb-4">Hosting discussions with authors, scholars, and literary enthusiasts on various topics, enhancing understanding and critical thinking.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-microphone fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Storytelling Sessions</h4>
                                    <p className="mb-4">Engaging audiences with captivating stories, preserving oral traditions, and inspiring imagination across all ages.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-users fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Open Mic Events</h4>
                                    <p className="mb-4">Providing an inclusive space for individuals to perform their literary pieces, from poetry to short stories, promoting diverse voices.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-handshake fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Author Meet&Greets</h4>
                                    <p className="mb-4">Facilitating interactions between authors and readers, providing insights into the writing process and fostering a deeper connection to books.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-vihara fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Literary Festivals</h4>
                                    <p className="mb-4">Organizing large-scale events celebrating literature, featuring book launches, readings, workshops, and networking opportunities for literary enthusiasts.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-pen fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Writing Workshops</h4>
                                    <p className="mb-4">Offering guidance and support to aspiring writers, helping them develop their narrative skills and explore different genres.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-book-open fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Poetry Workshops</h4>
                                    <p className="mb-4">Offering platforms for poets to refine their craft and share their work, encouraging poetic expression and appreciation.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                        <div className="bg-light rounded service-item">
                            <div className="service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                                    <i className="fas fa-book fa-7x text-primary mb-4"></i>
                                    <h4 className="mb-3">Book Donation Drives</h4>
                                    <p className="mb-4">Collecting and distributing books to underserved communities, ensuring access to reading materials and supporting literacy.</p>
                                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection