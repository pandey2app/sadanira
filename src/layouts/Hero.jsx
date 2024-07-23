import React from 'react'

const Hero = () => {
    return (
        <div class="container-fluid bg-light py-6 my-6 mt-0"
            // style={{
            //     backgroundImage: "url(img/banner-big.jpg)",
            //     backgroundSize: 'contain',
            //     backgroundRepeat: 'no-repeat'
            // }}
            >
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-7 col-md-12">
                        {/* <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small> */}
                        <h1 class="display-1 mb-4 animated bounceInDown">Bringing stories to  <span class="text-primary">where life grows.</span> Let's take literature to the fields.</h1>
                        <a href="" class="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Join Us</a>
                        <a href="" class="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
                    </div>
                    <div class="col-lg-5 col-md-12 d-flex justify-content-center flex-column " >
                        <img src="img/logo/logo.png" class="img-fluid rounded animated zoomIn" alt="sadanira logo"/>
                        <img src='img/logo/slogan2.png' alt="slogan" class="mb-1 ms-10 animated bounceInDown" height='50px'/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Hero