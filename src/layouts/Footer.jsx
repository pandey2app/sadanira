import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer py-3 my-5 mw-100 mb-0 bg-light wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            {/* <h1 className="text-primary">Cater<span className="text-dark">Serv</span></h1> */}
                            <img src="/img/logo/header-text.png" height='40px' alt="Sadanira" />
                            <p className="lh-lg my-2 fs-6  text-dark" >सदानीरा महोत्सव साहित्य की शक्ति, विकास को बढ़ावा देने और सबसे दूरस्थ स्थानों में भी साहित्य के प्रति प्रेम को बढ़ावा देने का एक प्रमाण है।</p>
                            <div className="footer-icon d-flex">
                                <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                <a href="instagram.com" className="btn btn-primary btn-sm-square me-2 rounded-circle"><i className="fab fa-instagram"></i></a>
                                <a href="instagrm.com" className="btn btn-primary btn-sm-square rounded-circle"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="mb-4">Fields of Work</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="text-body mb-3" href="facebook.com"><i className="fa fa-check text-primary me-2"></i>Sahitya</a>
                                <a className="text-body mb-3" href="facebook.com"><i className="fa fa-check text-primary me-2"></i>Sangeet</a>
                                <a className="text-body mb-3" href="facebook.com"><i className="fa fa-check text-primary me-2"></i>Cinema</a>
                                <a className="text-body mb-3" href="facebook.com"><i className="fa fa-check text-primary me-2"></i>Social Service</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="mb-4">Contact Us</h4>
                            <div className="d-flex flex-column align-items-start">
                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i> Karwatahi Bazar, Gopalganj Bihar, India</p>
                                <p><i className="fa fa-phone-alt text-primary me-2"></i> (+91) 8651419161</p>
                                <p><i className="fas fa-envelope text-primary me-2"></i> admin@sadanira.com</p>
                                {/* <p><i className="fa fa-clock text-primary me-2"></i>  Service</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="mb-4">Social Gallery</h4>
                            <div className="row g-2">
                                <div className="col-4">
                                     <img src="/img/sarvesh-team.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div className="col-4">
                                     <img src="/img/vivek-team.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div className="col-4">
                                     <img src="/img/aditya-team.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                {/* <div className="col-4">
                                     <img src="/img/menu-04.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div className="col-4">
                                     <img src="/img/menu-05.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div className="col-4">
                                     <img src="/img/menu-06.jpg" className="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer