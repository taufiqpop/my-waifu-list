import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const NoGameNoLife = () => {
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
                            <h2><span className="underlight">No Game No Life</span></h2>
                            <a href='https://www.livechart.me/anime/150' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Shiro */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/no-game-no-life/Shiro.gif" className="img-fluid" alt="Shiro" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shiro</small>
                                            <br />
                                            <a href="img/anime/2014/no-game-no-life/Shiro.gif" className="glightbox preview-link">(No Game No Life)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jibril */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/no-game-no-life/Jibril.webp" className="img-fluid" alt="Jibril" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jibril</small>
                                            <br />
                                            <a href="img/anime/2014/no-game-no-life/Jibril.webp" className="glightbox preview-link">(No Game No Life)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Zell Kurami */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/no-game-no-life/ZellKurami.webp" className="img-fluid" alt="Zell Kurami" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Zell Kurami</small>
                                            <br />
                                            <a href="img/anime/2014/no-game-no-life/ZellKurami.webp" className="glightbox preview-link">(No Game No Life)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dola Stephanie */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/no-game-no-life/DolaStephanie.gif" className="img-fluid" alt="Dola Stephanie" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Dola Stephanie</small>
                                            <br />
                                            <a href="img/anime/2014/no-game-no-life/DolaStephanie.gif" className="glightbox preview-link">(No Game No Life)</a>
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

export default NoGameNoLife;
