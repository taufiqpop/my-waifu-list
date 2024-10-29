import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const MushokuTensei = () => {
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
                            <h2><span className="underlight">Mushoku Tensei : Jobless Reincarnation</span></h2>
                            <a href='https://www.livechart.me/anime/9357' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Migurdia Roxy */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/mushoku-tensei/MigurdiaRoxy.gif" className="img-fluid" alt="Migurdia Roxy" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Migurdia Roxy</small>
                                            <br />
                                            <a href="img/anime/2021/mushoku-tensei/MigurdiaRoxy.gif" className="glightbox preview-link">(Mushoku Tensei)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nanahoshi Shizuka */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/mushoku-tensei/NanahoshiShizuka.gif" className="img-fluid" alt="Nanahoshi Shizuka" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nanahoshi Shizuka</small>
                                            <br />
                                            <a href="img/anime/2021/mushoku-tensei/NanahoshiShizuka.gif" className="glightbox preview-link">(Mushoku Tensei)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Boreas Eris */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/mushoku-tensei/BoreasEris.gif" className="img-fluid" alt="Boreas Eris" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Boreas Eris</small>
                                            <br />
                                            <a href="img/anime/2021/mushoku-tensei/BoreasEris.gif" className="glightbox preview-link">(Mushoku Tensei)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sylphiette */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/mushoku-tensei/Sylphiette.gif" className="img-fluid" alt="Sylphiette" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sylphiette</small>
                                            <br />
                                            <a href="img/anime/2021/mushoku-tensei/Sylphiette.gif" className="glightbox preview-link">(Mushoku Tensei)</a>
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

export default MushokuTensei;
