import React, { useState } from 'react';
import { useFormData } from '../hooks/useFormData';
import { contactUsInitial } from '../forms/initialStates/contactUsInitial';

const Contact = () => {
    const [formData, setFormData, inputChange] = useFormData(contactUsInitial)

    


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        
    };

    return (
        <div className="container-fluid contact py-3 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-0">
                    <div className="col-1">
                        <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                    </div>
                    <div className="col-10">
                        <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div className="text-center">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Contact Us</small>
                                <h1 className="display-5 mb-5">We'd love to hear from you!</h1>
                            </div>
                            <form onSubmit={handleSubmit} method='post' className="row g-4 form">
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='name' placeholder="Your Name" value={formData.name} onChange={inputChange} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="email" className="form-control border-primary p-2" name='email' placeholder="Your Email address" value={formData.email} onChange={inputChange} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='mobile' placeholder="Your mobile number" value={formData.mobile} onChange={inputChange} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='subject' placeholder="Subject" value={formData.subject} onChange={inputChange} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-primary p-2" name='message' placeholder="Your Message" rows="5" value={formData.message} onChange={inputChange}></textarea>
                                </div>
                                {/* {successMessage && <div className="col-12 text-success text-center">{successMessage}</div>} */}
                                {/* {errorMessage && <div className="col-12 text-danger text-center">{errorMessage}</div>} */}
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', transform: `rotate(180deg)`, opacity: "0.8" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
