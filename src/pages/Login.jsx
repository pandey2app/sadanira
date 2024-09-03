import React, { useEffect, useState } from 'react'
import { useFormData } from '../hooks/useFormData'
import { loginInitial } from '../forms/initialStates/loginInitial'
import { loginValidationSchema } from '../forms/validationSchema/loginValidation'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../redux/actions/user.action'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData, inputChange] = useFormData(loginInitial)
    const [errors, setErrors] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch()
    const loginError = useSelector(state=> state.user.loginError)
    const loginResponce = useSelector(state=> state.user.loginResponce)
    const navigate = useNavigate()

    const handlecheckBox =(e) => {
        setIsChecked(e.target.checked)
        setFormData((prev)=>({...prev, rememberMe : e.target.checked}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await loginValidationSchema.validate(formData, { abortEarly: false })

            dispatch(loginUserStart(formData))
            setTimeout(() =>{
                if(errorMessage){
                    setFormData(loginInitial)
                    setIsChecked(false)
                    setErrors({})
                }else if(successMessage){
                    sessionStorage.setItem('currentUser', true)
                    navigate('/user')
                }
            },1000)

        } catch (error) {
            const newErrors = {}
            if (error.inner) {
                error.inner.forEach((error) => {
                    if (!newErrors[error.path]) {
                        newErrors[error.path] = error.message
                    }
                });
                setErrors(newErrors)
            }
        }
    }

    useEffect(() => {
        if (loginError) {
            setErrorMessage(loginError)
        } else {
            setErrorMessage('')
        }
        if (loginResponce) {
            setSuccessMessage(loginResponce)
        }else{
            setSuccessMessage('')
        }
    },[loginError, loginResponce]);

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
                                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Login</small>
                                <h1 className="display-5 mb-5">Welcome Back!</h1>
                            </div>
                            <form onSubmit={handleSubmit} method='post' className="row g-4 form">
                                <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3">
                                    <input
                                        type="email"
                                        className="form-control border-primary p-2"
                                        name='email'
                                        placeholder="Your Email Here"
                                        value={formData.email}
                                        onChange={inputChange}
                                    />
                                    {errors.email && <div className="text-danger mt-1 mb-0">{errors.email}</div>}
                                </div>
                                <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3">
                                    <input
                                        type="password"
                                        className="form-control border-primary p-2"
                                        name='password'
                                        placeholder="Your Password Here"
                                        value={formData.password}
                                        onChange={inputChange}
                                    />
                                    {errors.password && <div className="text-danger mt-1 mb-0">{errors.password}</div>}
                                </div>
                                <div className="form-check w-100 d-flex justify-content-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={isChecked}
                                        onChange={handlecheckBox}
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                <div className="col-12 text-center">
                                    {errorMessage && <div className="text-danger mt-0 mb-2">{errorMessage}</div>}
                                    <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Login</button>
                                    {successMessage && <div className="text-success mt-2 mb-0">{successMessage}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="/img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', transform: 'rotate(180deg)', opacity: '0.8' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login