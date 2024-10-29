import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const BlueArchiveTheAnimation = () => {
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
                            <h2><span className="underlight">Blue Archive The Animation</span></h2>
                            <a href='https://www.livechart.me/anime/11798' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Sunaookami Shiroko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/blue-archive-the-animation/SunaookamiShiroko.gif" className="img-fluid" alt="Sunaookami Shiroko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sunaookami Shiroko</small>
                                            <br />
                                            <a href="img/anime/2024/blue-archive-the-animation/SunaookamiShiroko.gif" className="glightbox preview-link">(Blue Archive)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Takanashi Hoshino */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/blue-archive-the-animation/TakanashiHoshino.gif" className="img-fluid" alt="Takanashi Hoshino" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Takanashi Hoshino</small>
                                            <br />
                                            <a href="img/anime/2024/blue-archive-the-animation/TakanashiHoshino.gif" className="glightbox preview-link">(Blue Archive)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Izayoi Nonomi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/blue-archive-the-animation/IzayoiNonomi.gif" className="img-fluid" alt="Izayoi Nonomi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Izayoi Nonomi</small>
                                            <br />
                                            <a href="img/anime/2024/blue-archive-the-animation/IzayoiNonomi.gif" className="glightbox preview-link">(Blue Archive)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kuromi Serika */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/blue-archive-the-animation/KuromiSerika.gif" className="img-fluid" alt="Kuromi Serika" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kuromi Serika</small>
                                            <br />
                                            <a href="img/anime/2024/blue-archive-the-animation/KuromiSerika.gif" className="glightbox preview-link">(Blue Archive)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Okusora Ayane */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/blue-archive-the-animation/OkusoraAyane.gif" className="img-fluid" alt="Okusora Ayane" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Okusora Ayane</small>
                                            <br />
                                            <a href="img/anime/2024/blue-archive-the-animation/OkusoraAyane.gif" className="glightbox preview-link">(Blue Archive)</a>
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

export default BlueArchiveTheAnimation;
