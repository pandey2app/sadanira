import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <div class="container-fluid copyright bg-dark py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span class="text-light"><Link to="/"><i class="fas fa-copyright text-light me-2"></i> team@sadanira</Link>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 my-auto text-center font-monospace text-sm-end text-white">
                        Designed By <Link to='/' class="border-bottom" href="facebook.com"> Nazish@Ramish</Link> Distributed By<Link to='/' class="border-bottom" href="#"> pandey2app</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Copyright