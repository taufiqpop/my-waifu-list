import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const GenshinImpact = () => {
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
                            <h2><span className="underlight">Genshin Impact</span></h2>
                            <a href='https://genshin.hoyoverse.com/en/home' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Hu Tao */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/HuTao.jpg" className="img-fluid" alt="Hu Tao" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hu Tao</small>
                                            <br />
                                            <a href="img/games/genshin-impact/HuTao.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sangonomiya Kokomi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/SangonomiyaKokomi.jpg" className="img-fluid" alt="Sangonomiya Kokomi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sangonomiya Kokomi</small>
                                            <br />
                                            <a href="img/games/genshin-impact/SangonomiyaKokomi.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Keqing */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Keqing.jpg" className="img-fluid" alt="Keqing" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Keqing</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Keqing.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lumine */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Lumine.jpg" className="img-fluid" alt="Lumine" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lumine</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Lumine.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mualani */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Mualani.webp" className="img-fluid" alt="Mualani" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Mualani</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Mualani.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nilou */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Nilou.webp" className="img-fluid" alt="Nilou" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nilou</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Nilou.webp" className="glightbox preview-link">(Genshin Impact)</a>
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

export default GenshinImpact;
