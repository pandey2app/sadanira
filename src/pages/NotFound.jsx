import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            {/* <!--404 Hero Start --> */}
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">404 Error</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">404 Error</li>
                    </ol>
                </div>
            </div>
            {/* <!--404 Hero End --> */}


            {/* <!-- 404 Start --> */}
            <div className="container-fluid py-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 404 End --> */}
        </>
    )
}

export default NotFound