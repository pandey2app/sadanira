import React, { useRef } from 'react'
import { useFormData } from '../hooks/useFormData'
import { userInitialState } from '../forms/initialStates/userInitialState'
import { useDispatch } from 'react-redux'
import { addUserStart } from '../redux/actions/user.action'

const JoinUs = () => {
    const dispatch = useDispatch()
    const artInput = useRef()
    const [formData, , inputChange] = useFormData(userInitialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(addUserStart(formData))
    }

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
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='gender' value={formData.gender} onChange={inputChange}>
                                        <option defaultValue>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input
                                        type="date" className="form-control border-primary p-2" name='birthDate' placeholder="Select Birth Date" value={formData.birthDate}
                                        onChange={inputChange}
                                        onFocus={(e) => (e.target.type = 'date')}
                                        onBlur={(e) => (e.target.type = 'text')}
                                    />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="mobile" className="form-control border-primary p-2" name='mobile' placeholder="Your Contact No." value={formData.mobile} onChange={inputChange} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="email" className="form-control border-primary p-2" name='email' placeholder="Your Email Address." value={formData.email} onChange={inputChange} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="password" className="form-control border-primary p-2" name='password' placeholder="Your password." value={formData.password} onChange={inputChange} />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='state' value={formData.state} onChange={inputChange}>
                                        <option defaultValue>Select State</option>
                                        <option value="1">Depend On Country</option>
                                        <option value="2">UK</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" aria-label="Default select example" name='district' value={formData.district} onChange={inputChange}>
                                        <option defaultValue>Select District</option>
                                        <option value="1">Gopalganj</option>
                                        <option value="2">Siwan</option>
                                        <option value="3">Chhapra</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select className="form-select border-primary p-2" name='userCategory' aria-label="Default select example" value={formData.userCategory} onChange={inputChange}>
                                        <option defaultValue value='user'>Select Category</option>
                                        <option value='reader'>Reader</option>
                                        <option value='poet'>Poet</option>
                                        <option value='writer'>Writer</option>
                                        <option value='actor'>Actor</option>
                                        <option value='singer'>Singer</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <select ref={artInput} className="form-select border-primary p-2 visually-hidden" name='art' aria-label="Default select example" value={formData.art} onChange={inputChange}>
                                        <option defaultValue>Select Art</option>
                                        <option value='1'>Education</option>
                                        <option value="2">Engineering</option>
                                        <option value="3">Administration</option>
                                        <option value="3">Student</option>
                                    </select>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <textarea type="text" className="form-control border-primary p-2" name='objective' placeholder="Enter Your Objective" value={formData.art} onChange={inputChange}></textarea>
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