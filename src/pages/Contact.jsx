import React, { useState } from 'react';
import { useFormData } from '../hooks/useFormData';
import { contactUsInitial } from '../forms/initialStates/contactUsInitial';
import { contactUsValidation } from '../forms/validationSchema/contactUsValidation';
import { useDispatch } from 'react-redux';
import { addContactUsStart } from '../redux/actions/contactUs.action';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData , inputChange] = useFormData(contactUsInitial)
    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await contactUsValidation.validate(formData,{abortEarly:false})

            dispatch(addContactUsStart(formData));
            setErrors({})
            setSuccessMessage('Your message has been sent successfully!')
            setFormData(contactUsInitial)
            setTimeout(()=>{
                navigate('/')
            },500)
        } catch (error) {
            const newErrors = {};
            if(error.inner) {
                error.inner.forEach((error) => {
                    if(!newErrors[error.path]){
                        newErrors[error.path] = error.message;
                    }
                });
            }
            setSuccessMessage('')
            setErrors(newErrors);
        }  
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
                                    {errors.name && <div className="text-danger mt-1 mb-0">{errors.name}</div>}                                 
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="email" className="form-control border-primary p-2" name='email' placeholder="Your Email address" value={formData.email} onChange={inputChange} />
                                    {errors.email && <div className="text-danger mt-1 mb-0">{errors.email}</div>}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='mobile' placeholder="Your mobile number" value={formData.mobile} onChange={inputChange} />
                                    {errors.mobile && <div className="text-danger mt-1 mb-0">{errors.mobile}</div>}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='subject' placeholder="Subject" value={formData.subject} onChange={inputChange} />
                                    {errors.subject && <div className="text-danger mt-1 mb-0">{errors.subject}</div>}
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-primary p-2" name='message' placeholder="Your Message" rows="5" value={formData.message} onChange={inputChange}></textarea>
                                    {errors.message && <div className="text-danger mt-1 mb-0">{errors.message}</div>}
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Send Message</button>
                                    {successMessage && <div className="text-success mt-2 mb-0">{successMessage}</div>}
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
