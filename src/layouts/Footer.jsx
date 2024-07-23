import React from 'react'

const Footer = () => {
  return (
    <div class="container-fluid footer py-3 my-6 mw-100 mb-0 bg-light wow bounceInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            {/* <h1 class="text-primary">Cater<span class="text-dark">Serv</span></h1> */}
                            <img src="img/logo/header-text.png" height='50px' alt="Sadanira" />
                            <p class="lh-lg mb-4">The Sadanira Mahotsav stands as a testament to the power of literature, foster growth, and nurture a love for the written word in even the most remote of places.</p>
                            <div class="footer-icon d-flex">
                                <a class="btn btn-primary btn-sm-square me-2 rounded-circle" href="facebook.com"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-primary btn-sm-square me-2 rounded-circle" href="facebook.com"><i class="fab fa-twitter"></i></a>
                                <a href="instagram.com" class="btn btn-primary btn-sm-square me-2 rounded-circle"><i class="fab fa-instagram"></i></a>
                                <a href="instagrm.com" class="btn btn-primary btn-sm-square rounded-circle"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <h4 class="mb-4">Fields of Work</h4>
                            <div class="d-flex flex-column align-items-start">
                                <a class="text-body mb-3" href="facebook.com"><i class="fa fa-check text-primary me-2"></i>Sahitya</a>
                                <a class="text-body mb-3" href="facebook.com"><i class="fa fa-check text-primary me-2"></i>Sangeet</a>
                                <a class="text-body mb-3" href="facebook.com"><i class="fa fa-check text-primary me-2"></i>Cinema</a>
                                <a class="text-body mb-3" href="facebook.com"><i class="fa fa-check text-primary me-2"></i>Social Service</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <h4 class="mb-4">Contact Us</h4>
                            <div class="d-flex flex-column align-items-start">
                                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Karwatahi Bazar, Gopalganj Bihar, India</p>
                                <p><i class="fa fa-phone-alt text-primary me-2"></i> (+91) 8651419161</p>
                                <p><i class="fas fa-envelope fw-normal"></i> admin@sadaniramahotsav.com</p>
                                {/* <p><i class="fa fa-clock text-primary me-2"></i>  Service</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-item">
                            <h4 class="mb-4">Social Gallery</h4>
                            <div class="row g-2">
                                <div class="col-4">
                                     <img src="img/sarvesh-team.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div class="col-4">
                                     <img src="img/vivek-team.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div class="col-4">
                                     <img src="img/aditya-team.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                {/* <div class="col-4">
                                     <img src="img/menu-04.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div class="col-4">
                                     <img src="img/menu-05.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
                                </div>
                                <div class="col-4">
                                     <img src="img/menu-06.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
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