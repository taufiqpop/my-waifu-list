import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const OshiNoKo = () => {
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
                            <h2><span className="underlight">Oshi No Ko</span></h2>
                            <a href='https://www.livechart.me/anime/11247' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Hoshino Ruby */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/oshi-no-ko/HoshinoRuby.png" className="img-fluid" alt="Hoshino Ruby" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hoshino Ruby</small>
                                            <br />
                                            <a href="img/anime/2023/oshi-no-ko/HoshinoRuby.png" className="glightbox preview-link">(Oshi No Ko)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hoshino Ai */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/oshi-no-ko/HoshinoAi.webp" className="img-fluid" alt="Hoshino Ai" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hoshino Ai</small>
                                            <br />
                                            <a href="img/anime/2023/oshi-no-ko/HoshinoAi.webp" className="glightbox preview-link">(Oshi No Ko)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kurokawa Akane */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/oshi-no-ko/KurokawaAkane.jpeg" className="img-fluid" alt="Kurokawa Akane" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kurokawa Akane</small>
                                            <br />
                                            <a href="img/anime/2023/oshi-no-ko/KurokawaAkane.jpeg" className="glightbox preview-link">(Oshi No Ko)</a>
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

export default OshiNoKo;

