import React from 'react'
import { Link } from 'react-router-dom'
import writingLogo from '%PUBLIC_URL%/img/writing'

const StoryCard = () => {
    return (
        <section className=" d-flex flex-wrap justify-content-evenly">
            <div className="card mb-3" style={{ maxWidth: "440px", height: '200px' }}>
                <div className="row g-0" style={{ height: '100%' }}>
                    <div className="col-md-4" style={{ height: '100%' }}>
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-start" alt="..." height={'100%'} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">The Best Story title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='d-flex justify-content-between mt-n1'>
                                <Link to='#'><img src={writingLogo} alt="" /><cite>Ramish Pandey</cite></Link>
                                <Link to='#'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="card mb-3" style={{ maxWidth: "440px", height: '200px' }}>
                <div className="row g-0" style={{ height: '100%' }}>
                    <div className="col-md-4" style={{ height: '100%' }}>
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-start" alt="..." height={'100%'} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">The Best Story title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='d-flex justify-content-between'>
                                <Link to='#'><cite>-Ramish Pandey</cite></Link>
                                <Link to='#'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/*  */}
             <div className="card mb-3" style={{ maxWidth: "440px", height: '200px' }}>
                <div className="row g-0" style={{ height: '100%' }}>
                    <div className="col-md-4" style={{ height: '100%' }}>
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-start" alt="..." height={'100%'} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">The Best Story title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='d-flex justify-content-between'>
                                <Link to='#'><cite>-Ramish Pandey</cite></Link>
                                <Link to='#'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/*  */}
             <div className="card mb-3" style={{ maxWidth: "440px", height: '200px' }}>
                <div className="row g-0" style={{ height: '100%' }}>
                    <div className="col-md-4" style={{ height: '100%' }}>
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-start" alt="..." height={'100%'} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">The Best Story title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='d-flex justify-content-between'>
                                <Link to='#'><cite>-Ramish Pandey</cite></Link>
                                <Link to='#'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default StoryCard