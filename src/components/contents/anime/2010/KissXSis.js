import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const KissXSis = () => {
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
                            <h2><span className="underlight">Kiss X Sis</span></h2>
                            <a href='https://www.livechart.me/anime/3614' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Suminoe Ako */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/kiss-x-sis/SuminoeAko.gif" className="img-fluid" alt="Suminoe Ako" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Suminoe Ako</small>
                                            <br />
                                            <a href="img/anime/2010/kiss-x-sis/SuminoeAko.gif" className="glightbox preview-link">(Kiss X Sis)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Suminoe Riko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/kiss-x-sis/SuminoeRiko.gif" className="img-fluid" alt="Suminoe Riko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Suminoe Riko</small>
                                            <br />
                                            <a href="img/anime/2010/kiss-x-sis/SuminoeRiko.gif" className="glightbox preview-link">(Kiss X Sis)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kiryuu Yuuzuki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/kiss-x-sis/KiryuuYuuzuki.webp" className="img-fluid" alt="Kiryuu Yuuzuki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kiryuu Yuuzuki</small>
                                            <br />
                                            <a href="img/anime/2010/kiss-x-sis/KiryuuYuuzuki.webp" className="glightbox preview-link">(Kiss X Sis)</a>
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

export default KissXSis;
