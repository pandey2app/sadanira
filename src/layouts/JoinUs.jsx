import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useFormData } from '../hooks/useFormData'
import { userInitialState } from '../forms/initialStates/userInitialState'
import { useDispatch } from 'react-redux'
import { addUserStart } from '../redux/actions/user.action'
import { indianStatesAndUTs } from '../forms/data/states'
import { indianDistricts } from '../forms/data/districts'
import userValidationSchema from '../forms/validationSchema/userValidationSchema'

const JoinUs = () => {
    const dispatch = useDispatch()
    const artInput = useRef()
    const [formData, , inputChange, arts] = useFormData(userInitialState, artInput)
    const [districts, setDistricts] = useState([])
    const [errors, setErrors] = useState({})

    const districtHandler = useCallback(() => {
        if (formData.state) {
            const state = indianStatesAndUTs.find(state => state.value === formData.state)
            setDistricts([...indianDistricts[state.code]])
        }
    }, [formData.state])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userValidationSchema.validate(formData, { abortEarly: false })
            dispatch(addUserStart(formData))

            //redirect or other code when successful submission
        } catch (error) {
            const newErrors = {}
            console.dir(error.inner);            
            error.inner.forEach(err => {
                if(!newErrors[err.path]){
                    newErrors[err.path] = err.message
                }
            });
            setErrors(newErrors)
            console.log(errors)
        }
    }

    useEffect(() => {
        districtHandler()
    }, [formData.state, districtHandler])

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
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Join Us</small>
                                <h1 className="display-5 mb-5">If you have a dream to Empower the Society</h1>
                            </div>
                            <form onSubmit={handleSubmit} method='post' className="row g-4 form">
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" className="form-control border-primary p-2" name='name' placeholder="Enter Your Name." value={formData.name} onChange={inputChange} />
                                    {errors.name && <p className='text-danger mt-1 mb-0'>*{errors.name}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='gender' value={formData.gender} onChange={inputChange}>
                                        <option defaultValue>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.gender && <p className='text-danger mt-1 mb-0'>*{errors.gender}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input
                                        type="date" className="form-control border-primary p-2" name='birthDate' placeholder="Select Birth Date" value={formData.birthDate}
                                        onChange={inputChange}
                                        onFocus={(e) => (e.target.type = 'date')}
                                        onBlur={(e) => (e.target.type = 'text')}
                                    />
                                    {errors.birthDate && <p className='text-danger mt-1 mb-0'>*{errors.birthDate}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="mobile" className="form-control border-primary p-2" name='mobile' placeholder="Your Contact No." value={formData.mobile} onChange={inputChange} />
                                    {errors.mobile && <p className='text-danger mt-1 mb-0'>*{errors.mobile}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="email" className="form-control border-primary p-2" name='email' placeholder="Your Email Address." value={formData.email} onChange={inputChange} />
                                    {errors.email && <p className='text-danger mt-1 mb-0'>*{errors.email}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="password" className="form-control border-primary p-2" name='password' placeholder="Your password." value={formData.password} onChange={inputChange} />
                                    {errors.password && <p className='text-danger mt-1 mb-0'>*{errors.password}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='state' value={formData.state} onChange={inputChange} >
                                        <option defaultValue>Select State</option>
                                        {
                                            indianStatesAndUTs.map((state, index) => (
                                                <option key={index} value={state.value} title={state.code}>{state.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.state && <p className='text-danger mt-1 mb-0'>*{errors.state}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='district' value={formData.district} onChange={inputChange}>
                                        <option defaultValue>Select District</option>
                                        {
                                            districts.length && districts.map((district, index) => (
                                                <option key={index} value={district.value}>{district.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.district && <p className='text-danger mt-1 mb-0'>*{errors.district}</p>}
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" name='userCategory' aria-label="Default select example" value={formData.userCategory} onChange={inputChange}>
                                        <option defaultValue value='reader'>Select Category (reader by default)</option>
                                        <option value='poet'>Poet</option>
                                        <option value='writer'>Writer</option>
                                        <option value='actor'>Actor</option>
                                        <option value='singer'>Singer</option>
                                    </select>
                                    {errors.userCategory && <p className='text-danger mt-1 mb-0'>*{errors.userCategory}</p>}
                                </div>
                                <div ref={artInput} className="col-lg-4 col-md-6 visually-hidden">
                                    <select className="form-select border-primary p-2 " name='art' aria-label="Default select example" value={formData.art} onChange={inputChange}>
                                        {
                                            arts.length && arts.map((art, index) => (
                                                <option key={index} value={art.value}>{art.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.art && <p className='text-danger mt-1 mb-0'>*{errors.art}</p>}
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <textarea type="text" className="form-control border-primary p-2" name='objective' placeholder="Enter Your Objective" value={formData.objective} onChange={inputChange}></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Submit Form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: "cover", transform: `rotate(180deg)`, opacity: "0.8" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs