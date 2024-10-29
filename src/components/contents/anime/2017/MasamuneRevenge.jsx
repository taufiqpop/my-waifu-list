import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const MasamuneRevenge = () => {
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
                            <h2><span className="underlight">Masamune's Revenge</span></h2>
                            <a href='https://www.livechart.me/anime/2226' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Koiwai Yoshino */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/masamune-revenge/KoiwaiYoshino.gif" className="img-fluid" alt="Koiwai Yoshino" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Koiwai Yoshino</small>
                                            <br />
                                            <a href="img/anime/2017/masamune-revenge/KoiwaiYoshino.gif" className="glightbox preview-link">(Masamune's Revenge)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Adagaki Aki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/masamune-revenge/AdagakiAki.gif" className="img-fluid" alt="Adagaki Aki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Adagaki Aki</small>
                                            <br />
                                            <a href="img/anime/2017/masamune-revenge/AdagakiAki.gif" className="glightbox preview-link">(Masamune's Revenge)</a>
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

export default MasamuneRevenge;
