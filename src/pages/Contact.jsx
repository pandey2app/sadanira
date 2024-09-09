import React, { useState } from 'react';
import { contactUsInitial } from '../forms/initialStates/contactUsInitial';
import { contactUsValidation } from '../forms/validationSchema/contactUsValidation';
import { useDispatch } from 'react-redux';
import { addContactUsStart } from '../redux/actions/contactUs.action';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // Handle form submission
    const handleSubmit = async () => {
        try {
            dispatch(addContactUsStart(formik.values));
            setSuccessMessage('Your message has been sent successfully!')
            setTimeout(()=>{
                navigate('/')
            },1000)
        } catch (error) {
            console.err("Error while sending message: " + error);            
            setSuccessMessage('')
        }  
    };

    const formik = useFormik({
        initialValues: contactUsInitial,
        validationSchema: contactUsValidation,
        onSubmit: handleSubmit
        })

    return (
        <div className="container-fluid contact py-3 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-0">
                    <div className="col-1">
                        <img src="/img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                    </div>
                    <div className="col-10">
                        <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                            <div className="text-center">
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Contact Us</small>
                                <h1 className="display-5 mb-5">We'd love to hear from you!</h1>
                            </div>
                            <form onSubmit={formik.handleSubmit} method='post' className="row g-4 form">
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='name' placeholder="Your Name" value={formik.values.name} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                                    {(formik.touched.name && formik.errors.name) && <div className="text-danger mt-1 mb-0">{formik.errors.name}</div>}                                 
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="email" className="form-control border-primary p-2" name='email' placeholder="Your Email address" value={formik.values.email} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                                    {(formik.touched.email && formik.errors.email) && <div className="text-danger mt-1 mb-0">{formik.errors.email}</div>}                                 
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='mobile' placeholder="Your mobile number" value={formik.values.mobile} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                                    {(formik.touched.mobile && formik.errors.mobile) && <div className="text-danger mt-1 mb-0">{formik.errors.mobile}</div>}                                 
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='subject' placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                                    {(formik.touched.subject && formik.errors.subject) && <div className="text-danger mt-1 mb-0">{formik.errors.subject}</div>}                                 
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-primary p-2" name='message' placeholder="Your Message" rows="5" value={formik.values.message} onChange={formik.handleChange}  onBlur={formik.handleBlur}></textarea>
                                    {(formik.touched.message && formik.errors.message) && <div className="text-danger mt-1 mb-0">{formik.errors.message}</div>}                                 
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Send Message</button>
                                    {successMessage && <div className="text-success mt-2 mb-0">{successMessage}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="/img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', transform: `rotate(180deg)`, opacity: "0.8" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
