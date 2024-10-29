import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const KonoSuba = () => {
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
                            <h2><span className="underlight">KonoSuba</span></h2>
                            <a href='https://www.livechart.me/anime/1615' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Megumin */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/konosuba/Megumin.gif" className="img-fluid" alt="Megumin" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Megumin</small>
                                            <br />
                                            <a href="img/anime/2016/konosuba/Megumin.gif" className="glightbox preview-link">(KonoSuba)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aqua */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/konosuba/Aqua.gif" className="img-fluid" alt="Aqua" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Aqua</small>
                                            <br />
                                            <a href="img/anime/2016/konosuba/Aqua.gif" className="glightbox preview-link">(KonoSuba)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* YunYun */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/konosuba/YunYun.gif" className="img-fluid" alt="YunYun" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>YunYun</small>
                                            <br />
                                            <a href="img/anime/2016/konosuba/YunYun.gif" className="glightbox preview-link">(KonoSuba)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dustiness Lalatina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/konosuba/DustinessLalatina.webp" className="img-fluid" alt="Dustiness Lalatina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Dustiness Lalatina</small>
                                            <br />
                                            <a href="img/anime/2016/konosuba/DustinessLalatina.webp" className="glightbox preview-link">(KonoSuba)</a>
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

export default KonoSuba;
