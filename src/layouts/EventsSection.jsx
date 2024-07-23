import React from 'react'

const EventsSection = () => {
    return (
        <div class="container-fluid event py-6">
            <div class="container">
                <div class="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Latest Events</small>
                    <h1 class="display-5 mb-5">Our Social & Literary Events Gallery</h1>
                </div>
                <div class="tab-class text-center">
                    <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li class="nav-item p-2">
                            <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span class="text-dark" style={{width: "150px"}}>All Events</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex py-2 mx-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span class="text-dark" style={{width: "150px"}}>Sahitya Charcha</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span class="text-dark" style={{width: "150px"}}>Book Launch</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                <span class="text-dark" style={{width: "150px"}}>Kavi Sammelan</span>
                            </a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                <span class="text-dark" style={{width: "150px"}}>Lok Sangeet</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/lok-sangeet1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Lok Sangeet</h4>
                                                        <a href="img/lok-sangeet1.jpg" data-lightbox="event-1" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/open-mic1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Open mic</h4>
                                                        <a href="img/open-mic1.jpg" data-lightbox="event-2" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/kavi-sammelan1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Kavi Sammelan</h4>
                                                        <a href="img/kavi-sammelan1.jpg" data-lightbox="event-3" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/open-mic2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Open Mic</h4>
                                                        <a href="img/open-mic2.jpg" data-lightbox="event-4" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/kavi-sammelan2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Kavi Sammelan</h4>
                                                        <a href="img/kavi-sammelan2.jpg" data-lightbox="event-5" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/kavi-sammelan3.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Kavi Sammelan</h4>
                                                        <a href="img/kavi-sammelan3.jpg" data-lightbox="event-6" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/sahitya-charcha1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Sahitya Charcha</h4>
                                                        <a href="img/sahitya-charcha1.jpg" data-lightbox="event-7" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/book-launch1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Book Launch</h4>
                                                        <a href="img/book-launch1.jpg" data-lightbox="event-17" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/sahitya-charcha1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Sahitya Charcha</h4>
                                                        <a href="img/sahitya-charcha1.jpg" data-lightbox="event-8" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/sahitya-charcha2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Sahitya Charcha</h4>
                                                        <a href="img/sahitya-charcha2.jpg" data-lightbox="event-9" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/book-launch1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Book Launch</h4>
                                                        <a href="img/book-launch1.jpg" data-lightbox="event-10" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/book-launch2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Book Launch</h4>
                                                        <a href="img/book-launch2.jpg" data-lightbox="event-11" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/kavi-sammelan1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Kavi Sammelan</h4>
                                                        <a href="img/kavi-sammelan1.jpg" data-lightbox="event-12" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/kavi-sammelan2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Kavi Sammelan</h4>
                                                        <a href="img/kavi-sammelan2.jpg" data-lightbox="event-13" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/lok-sangeet1.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Lok Sangeet</h4>
                                                        <a href="img/lok-sangeet1.jpg" data-lightbox="event-14" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-3">
                                            <div class="event-img position-relative">
                                                <img class="img-fluid rounded w-100" src="img/lok-sangeet2.jpg" alt="" />
                                                    <div class="event-overlay d-flex flex-column p-4">
                                                        <h4 class="me-auto">Lok Sangeet</h4>
                                                        <a href="img/lok-sangeet2.jpg" data-lightbox="event-15" class="my-auto"><i class="fas fa-search-plus text-dark fa-2x"></i></a>
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