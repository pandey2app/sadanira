import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const pathArray = useLocation().pathname.split('/')
    return (
        <div class="container-fluid bg-light py-6 my-6 mt-0">
            <div class="container text-center animated bounceInDown">
                <h1 class="display-1 mb-4">{pathArray.length > 1 ? pathArray[pathArray.length-1][0].toUpperCase().concat(pathArray[pathArray.length-1].substring(1).toLowerCase()):''}</h1>
                <ol class="breadcrumb justify-content-center mb-0 animated bounceInDown">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    {/* {
                        pathArray[1] !== "pages" && <li class="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                    } */}
                    {
                        pathArray.length && pathArray.map((path, index) => (
                            path.length > 1 && <li class="breadcrumb-item" key={index}><Link to={`/${path.toLowerCase()}`}>{path.toLowerCase()}</Link></li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Breadcrumbs