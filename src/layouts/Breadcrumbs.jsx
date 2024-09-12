import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const pathArray = useLocation().pathname.split('/')

    if(pathArray.some(item => item.trim() === "post" || "posts")) return ""
    return (
        <div className="container-fluid bg-light py-3 my-3 mt-0">
            <div className="container text-center animated bounceInDown">
                <h1 className="display-4 mb-4">{pathArray.length > 1 ? pathArray[pathArray.length-1][0].toUpperCase().concat(pathArray[pathArray.length-1].substring(1).toLowerCase()):''}</h1>
                <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    {
                        pathArray.length && pathArray.map((path, index) => (
                            path.length > 1 && <li className="breadcrumb-item" key={index}><Link to={`/${path.toLowerCase()}`}>{path.toLowerCase()}</Link></li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Breadcrumbs