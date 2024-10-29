import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const AkashicRecords = () => {
    useEffect(() => {
        GLightbox({
            selector: '.glightbox',
        });
    }, []);

    return (
        <main className="main">
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="50">
                            <h2><span className="underlight">Akashic Records Of Bastard Magic Instructor</span></h2>
                            <a href='https://www.livechart.me/anime/2081' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Fibel Sistine */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/akashic-records/FibelSistine.gif" className="img-fluid" alt="Fibel Sistine" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Fibel Sistine</small>
                                            <br />
                                            <a href="img/anime/2017/akashic-records/FibelSistine.gif" className="glightbox preview-link">(Akashic Records)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tingel Rumia */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/akashic-records/TingelRumia.gif" className="img-fluid" alt="Tingel Rumia" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tingel Rumia</small>
                                            <br />
                                            <a href="img/anime/2017/akashic-records/TingelRumia.gif" className="glightbox preview-link">(Akashic Records)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default AkashicRecords;
