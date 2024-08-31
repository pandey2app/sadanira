import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><Link to="/"><i className="fas fa-copyright text-light me-2"></i> team@sadanira</Link>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 my-auto text-center font-monospace text-sm-end text-white">
                        Designed By <Link to='https://github.com/nazishshaheen' className="border-bottom"> nazish@ramish</Link> Developed By <Link to='https://github.com/pandey2app' className="border-bottom" href="#">pandey2app</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Copyright