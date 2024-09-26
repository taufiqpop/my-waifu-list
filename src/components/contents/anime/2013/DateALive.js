import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const DateALive = () => {
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
                            <h2><span className="underlight">Date A Live</span></h2>
                            <a href='https://www.livechart.me/anime/808' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Itsuka Kotori */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/ItsukaKotori.jpg" className="img-fluid" alt="Itsuka Kotori" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Itsuka Kotori</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/ItsukaKotori.jpg" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tobiichi Origami */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/TobiichiOrigami.png" className="img-fluid" alt="Tobiichi Origami" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tobiichi Origami</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/TobiichiOrigami.png" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tokisaki Kurumi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/TokisakiKurumi.webp" className="img-fluid" alt="Tokisaki Kurumi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tokisaki Kurumi</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/TokisakiKurumi.webp" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yatogami Tohka */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/YatogamiTohka.jpg" className="img-fluid" alt="Yatogami Tohka" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yatogami Tohka</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/YatogamiTohka.jpg" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Izayoi Miku */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/IzayoiMiku.jpg" className="img-fluid" alt="Izayoi Miku" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Izayoi Miku</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/IzayoiMiku.jpg" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yamai Kaguya & Yuzuru */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/YamaiKaguyaYuzuru.jpg" className="img-fluid" alt="Yamai Kaguya & Yuzuru" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yamai Kaguya & Yuzuru</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/YamaiKaguyaYuzuru.jpg" className="glightbox preview-link">(Date A Live)</a>
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

export default DateALive;
