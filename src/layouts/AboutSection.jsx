import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <div className="container-fluid py-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                        <img src="/img/logo/sadanira-mahotsav-bgr.png" className="img-fluid rounded" alt="sadaneera mahotsav" />
                        <br/>
                        <img src="/img/lit-fest-bgr.png" className="img-fluid rounded" alt="dehat ka pahla lit-fest" />
                    </div>
                    <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Till Now</small>
                        <h1 className="display-5 mb-4">Hosted 200 + Famous Poets</h1>
                        <p className="mb-4">The presence of such a diverse and talented group of poets transformed our environment into vibrant spaces of creativity and expression. Their verses, resonating with themes of nature, culture, and human experience, echoed through the open air, bringing a profound sense of connection and inspiration to all who attended.</p>
                        <div className="row g-4 text-dark mb-5">
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Invited poets from across India.
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Cultivated local literary appreciation.
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Fostered creative community engagement.
                            </div>
                            <div className="col-sm-6">
                                <i className="fas fa-share text-primary me-2"></i>Celebrated diverse poetic expressions.
                            </div>
                        </div>
                        <Link to="/about" className="btn btn-primary py-3 px-5 rounded-pill">About Us<i className="fas fa-arrow-right ps-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection