import React from 'react'

const FactSection = () => {
    return (
        <>
            <div class="container-fluid faqt py-6">
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-7">
                            <div class="row g-4">
                                <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                                    <div class="faqt-item bg-primary rounded p-4 text-center">
                                        <i class="fas fa-users fa-4x mb-4 text-white"></i>
                                        <h1 class="display-4 fw-bold" data-toggle="counter-up">1000+</h1>
                                        <p class="text-dark text-uppercase fw-bold mb-0">Active Volunteers</p>
                                    </div>
                                </div>
                                <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                                    <div class="faqt-item bg-primary rounded p-4 text-center">
                                        <i class="fas fa-user-graduate fa-4x mb-4 text-white"></i>
                                        <h1 class="display-4 fw-bold" data-toggle="counter-up">200+</h1>
                                        <p class="text-dark text-uppercase fw-bold mb-0">Scholors</p>
                                    </div>
                                </div>
                                <div class="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                                    <div class="faqt-item bg-primary rounded p-4 text-center">
                                        <i class="fas fa-calendar-check fa-4x mb-4 text-white"></i>
                                        <h1 class="display-4 fw-bold" data-toggle="counter-up">20+</h1>
                                        <p class="text-dark text-uppercase fw-bold mb-0">Events Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                            <div class="video">
                                <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://youtu.be/qnkD7XXsJdU?si=mLdqPfs184A73efP" data-bs-target="#videoModal">
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Video-- > */}
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div class="ratio ratio-16x9">
                                <iframe width="560" class="embed-responsive-item" height="315" src="https://www.youtube.com/embed/qnkD7XXsJdU?si=UzW_IQTyYw0VCxaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" id="video" allowfullscreen allowscriptaccess="always" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FactSection