import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const AngelBeats = () => {
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
                            <h2><span className="underlight">Angel Beats</span></h2>
                            <a href='https://www.livechart.me/anime/3122' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Tachibana Kanade */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/angel-beats/TachibanaKanade.gif" className="img-fluid" alt="Tachibana Kanade" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tachibana Kanade</small>
                                            <br />
                                            <a href="img/anime/2010/angel-beats/TachibanaKanade.gif" className="glightbox preview-link">(Angel Beats)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nakamura Yuri */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/angel-beats/NakamuraYuri.gif" className="img-fluid" alt="Nakamura Yuri" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nakamura Yuri</small>
                                            <br />
                                            <a href="img/anime/2010/angel-beats/NakamuraYuri.gif" className="glightbox preview-link">(Angel Beats)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yui */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/angel-beats/Yui.gif" className="img-fluid" alt="Yui" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yui</small>
                                            <br />
                                            <a href="img/anime/2010/angel-beats/Yui.gif" className="glightbox preview-link">(Angel Beats)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Iwasawa Masami */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/angel-beats/IwasawaMasami.webp" className="img-fluid" alt="Iwasawa Masami" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Iwasawa Masami</small>
                                            <br />
                                            <a href="img/anime/2010/angel-beats/IwasawaMasami.webp" className="glightbox preview-link">(Angel Beats)</a>
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

export default AngelBeats;
