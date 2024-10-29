import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const InfiniteStratos = () => {
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
                            <h2><span className="underlight">Infinite Stratos</span></h2>
                            <a href='https://www.livechart.me/anime/2985' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Shinonono Houki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2011/infinite-stratos/ShinononoHouki.gif" className="img-fluid" alt="Shinonono Houki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shinonono Houki</small>
                                            <br />
                                            <a href="img/anime/2011/infinite-stratos/ShinononoHouki.gif" className="glightbox preview-link">(Infinite Stratos)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shinonono Tabane */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2011/infinite-stratos/ShinononoTabane.gif" className="img-fluid" alt="Shinonono Tabane" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shinonono Tabane</small>
                                            <br />
                                            <a href="img/anime/2011/infinite-stratos/ShinononoTabane.gif" className="glightbox preview-link">(Infinite Stratos)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Huang Lingyin */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2011/infinite-stratos/HuangLingyin.gif" className="img-fluid" alt="Huang Lingyin" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Huang Lingyin</small>
                                            <br />
                                            <a href="img/anime/2011/infinite-stratos/HuangLingyin.gif" className="glightbox preview-link">(Infinite Stratos)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nohotoke Honne */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2011/infinite-stratos/NohotokeHonne.gif" className="img-fluid" alt="Nohotoke Honne" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nohotoke Honne</small>
                                            <br />
                                            <a href="img/anime/2011/infinite-stratos/NohotokeHonne.gif" className="glightbox preview-link">(Infinite Stratos)</a>
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

export default InfiniteStratos;
