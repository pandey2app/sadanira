import React from 'react'

const AboutSection = () => {
    return (
        <div class="container-fluid py-6">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                        <img src="img/logo/logo-big.png" class="img-fluid rounded" alt="" />
                    </div>
                    <div class="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Till Now</small>
                        <h1 class="display-5 mb-4">Hosted 200 + Famous Poets</h1>
                        <p class="mb-4">The presence of such a diverse and talented group of poets transformed our environment into vibrant spaces of creativity and expression. Their verses, resonating with themes of nature, culture, and human experience, echoed through the open air, bringing a profound sense of connection and inspiration to all who attended.</p>
                        <div class="row g-4 text-dark mb-5">
                            <div class="col-sm-6">
                                <i class="fas fa-share text-primary me-2"></i>Invited poets from across India.
                            </div>
                            <div class="col-sm-6">
                                <i class="fas fa-share text-primary me-2"></i>Cultivated local literary appreciation.
                            </div>
                            <div class="col-sm-6">
                                <i class="fas fa-share text-primary me-2"></i>Fostered creative community engagement.
                            </div>
                            <div class="col-sm-6">
                                <i class="fas fa-share text-primary me-2"></i>Celebrated diverse poetic expressions.
                            </div>
                        </div>
                        <a href="" class="btn btn-primary py-3 px-5 rounded-pill">About Us<i class="fas fa-arrow-right ps-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection