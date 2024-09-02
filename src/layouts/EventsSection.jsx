import React from 'react'

const EventsSection = () => {
    return (
        <div className="container-fluid event py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Latest Events</small>
                    <h1 className="display-5 mb-5">Our Social & Literary Events Gallery</h1>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span className="text-dark" style={{width: "150px"}}>All Events</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span className="text-dark" style={{width: "150px"}}>Sahitya Charcha</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span className="text-dark" style={{width: "150px"}}>Book Launch</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span className="text-dark" style={{width: "150px"}}>Kavi Sammelan</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span className="text-dark" style={{width: "150px"}}>Lok Sangeet</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/lok-sangeet1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Lok Sangeet</h4>
                                                        <a href="/img/lok-sangeet1.jpg" data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/open-mic1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Open mic</h4>
                                                        <a href="/img/open-mic1.jpg" data-lightbox="event-2" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/kavi-sammelan1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Kavi Sammelan</h4>
                                                        <a href="/img/kavi-sammelan1.jpg" data-lightbox="event-3" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/open-mic2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Open Mic</h4>
                                                        <a href="/img/open-mic2.jpg" data-lightbox="event-4" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/kavi-sammelan2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Kavi Sammelan</h4>
                                                        <a href="/img/kavi-sammelan2.jpg" data-lightbox="event-5" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/kavi-sammelan3.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Kavi Sammelan</h4>
                                                        <a href="/img/kavi-sammelan3.jpg" data-lightbox="event-6" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/sahitya-charcha1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Sahitya Charcha</h4>
                                                        <a href="/img/sahitya-charcha1.jpg" data-lightbox="event-7" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/book-launch1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Book Launch</h4>
                                                        <a href="/img/book-launch1.jpg" data-lightbox="event-17" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/sahitya-charcha1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Sahitya Charcha</h4>
                                                        <a href="/img/sahitya-charcha1.jpg" data-lightbox="event-8" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/sahitya-charcha2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Sahitya Charcha</h4>
                                                        <a href="/img/sahitya-charcha2.jpg" data-lightbox="event-9" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/book-launch1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Book Launch</h4>
                                                        <a href="/img/book-launch1.jpg" data-lightbox="event-10" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/book-launch2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Book Launch</h4>
                                                        <a href="/img/book-launch2.jpg" data-lightbox="event-11" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/kavi-sammelan1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Kavi Sammelan</h4>
                                                        <a href="/img/kavi-sammelan1.jpg" data-lightbox="event-12" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/kavi-sammelan2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Kavi Sammelan</h4>
                                                        <a href="/img/kavi-sammelan2.jpg" data-lightbox="event-13" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/lok-sangeet1.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Lok Sangeet</h4>
                                                        <a href="/img/lok-sangeet1.jpg" data-lightbox="event-14" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="/img/lok-sangeet2.jpg" alt="" />
                                                    <div className="event-overlay d-flex flex-column p-4">
                                                        <h4 className="me-auto">Lok Sangeet</h4>
                                                        <a href="/img/lok-sangeet2.jpg" data-lightbox="event-15" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsSection