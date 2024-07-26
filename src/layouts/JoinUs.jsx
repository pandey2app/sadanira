import React from 'react'

const JoinUs = () => {
    return (
        <div class="container-fluid contact py-3 wow bounceInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row g-0">
                    <div class="col-1">
                        <img src="img/background-site.jpg" class="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                    </div>
                    <div class="col-10">
                        <div class="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div class="text-center">
                                <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Join Us</small>
                                <h1 class="display-5 mb-5">If you have a dream to Empower the Society</h1>
                            </div>
                            <div class="row g-4 form">
                                <div class="col-lg-4 col-md-6">
                                    <input type="text" class="form-control border-primary p-2" name='name' placeholder="Enter Your Name." />
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="mobile" class="form-control border-primary p-2" name='mobile' placeholder="Your Contact No."/>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="email" class="form-control border-primary p-2" name='email' placeholder="Your Email Address."/>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select Country</option>
                                        <option value="1">India</option>
                                        <option value="2">UK</option>
                                        <option value="3">USA</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select State</option>
                                        <option value="1">Depend On Country</option>
                                        <option value="2">UK</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" aria-label="Default select example">
                                        <option selected>Select District</option>
                                        <option value="1">Gopalganj</option>
                                        <option value="2">Siwan</option>
                                        <option value="3">Chhapra</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" name='member-type' aria-label="Default select example">
                                        <option selected>Membership Type</option>
                                        <option value='1'>Full Time</option>
                                        <option value="2">Part Time</option>
                                        <option value="3">Guest</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <select class="form-select border-primary p-2" name='field' aria-label="Default select example">
                                        <option selected>Your Field</option>
                                        <option value='1'>Education</option>
                                        <option value="2">Engineering</option>
                                        <option value="3">Administration</option>
                                        <option value="3">Student</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="date" class="form-control border-primary p-2" name='birthdate' placeholder="Select Birth Date" />
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <textarea type="text" class="form-control border-primary p-2" name='objective' placeholder="Enter Your Objective" ></textarea>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary px-5 py-3 rounded-pill">Submit Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="img/background-site.jpg" class="img-fluid h-100 w-100 rounded-start" style={{ objectFit: "cover", transform: `rotate(180deg)`, opacity: "0.8" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs