import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const LycorisRecoil = () => {
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
                            <h2><span className="underlight">Lycoris Recoil</span></h2>
                            <Link href='https://www.livechart.me/anime/11004' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Nishikigi Chisato */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2022/lycoris-recoil/NishikigiChisato.gif" className="img-fluid" alt="Nishikigi Chisato" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nishikigi Chisato</small>
                                            <br />
                                            <Link href="img/anime/2022/lycoris-recoil/NishikigiChisato.gif" className="glightbox preview-link">(Lycoris Recoil)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inoue Takina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2022/lycoris-recoil/InoueTakina.gif" className="img-fluid" alt="Inoue Takina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Inoue Takina</small>
                                            <br />
                                            <Link href="img/anime/2022/lycoris-recoil/InoueTakina.gif" className="glightbox preview-link">(Lycoris Recoil)</Link>
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

export default LycorisRecoil;
