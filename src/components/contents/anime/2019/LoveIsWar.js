import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const LoveIsWar = () => {
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
                            <h2><span className="underlight">Kaguya-sama : Love Is War</span></h2>
                            <a href='https://www.livechart.me/anime/3315' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Fujiwara Chika */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/love-is-war/FujiwaraChika.gif" className="img-fluid" alt="Fujiwara Chika" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Fujiwara Chika</small>
                                            <br />
                                            <a href="img/anime/2019/love-is-war/FujiwaraChika.gif" className="glightbox preview-link">(Kaguya-sama : Love Is War)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hayasaka Ai */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/love-is-war/HayasakaAi.gif" className="img-fluid" alt="Hayasaka Ai" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hayasaka Ai</small>
                                            <br />
                                            <a href="img/anime/2019/love-is-war/HayasakaAi.gif" className="glightbox preview-link">(Kaguya-sama : Love Is War)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shinomiya Kaguya */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/love-is-war/ShinomiyaKaguya.gif" className="img-fluid" alt="Shinomiya Kaguya" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shinomiya Kaguya</small>
                                            <br />
                                            <a href="img/anime/2019/love-is-war/ShinomiyaKaguya.gif" className="glightbox preview-link">(Kaguya-sama : Love Is War)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Iino Miko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/love-is-war/IinoMiko.gif" className="img-fluid" alt="Iino Miko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Iino Miko</small>
                                            <br />
                                            <a href="img/anime/2019/love-is-war/IinoMiko.gif" className="glightbox preview-link">(Kaguya-sama : Love Is War)</a>
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

export default LoveIsWar;
