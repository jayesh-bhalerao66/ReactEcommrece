import React from 'react'
import video1 from '../videos/video1.webm'
import video2 from '../videos/video2.webm'
import video3 from '../videos/video3.webm'
export default function Hero() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row bg-warning pb-3">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <video src={video1} class="d-block w-100" style={{ height: "400px" }}></video>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Take your work with you, wherever you go.</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <video src={video2} class="d-block w-100" style={{ height: "400px" }}></video>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Experience the future on your wrist.</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <video src={video3} class="d-block w-100" style={{ height: "400px" }}></video>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Build a network</h5>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 caro2">
                        <h2 className='text-center'><i>Shop With Us</i></h2>
                        <p>Experience the Future Today,Leading the Way in Electronic Innovation For businesses, promoting and selling products through an e-commerce platform can expand the business and expand consumer groups more quickly and conveniently and save a lot of costs.</p>
                        <a href="#shopnow"><button type="button" class="btn btn-outline-dark py-2 px-5">Shop Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
