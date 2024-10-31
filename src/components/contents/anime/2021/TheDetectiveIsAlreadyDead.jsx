import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const TheDetectiveIsAlreadyDead = () => {
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
                            <h2><span className="underlight">The Detective Is Already Dead</span></h2>
                            <Link href='https://www.livechart.me/anime/10355' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 9/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Siesta */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/the-detective-is-already-dead/Siesta.gif" className="img-fluid" alt="Siesta" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Siesta</small>
                                            <br />
                                            <Link href="img/anime/2021/the-detective-is-already-dead/Siesta.gif" className="glightbox preview-link">(The Detective Is Already Dead)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Natsunagi Nagisa */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/the-detective-is-already-dead/NatsunagiNagisa.gif" className="img-fluid" alt="Natsunagi Nagisa" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Natsunagi Nagisa</small>
                                            <br />
                                            <Link href="img/anime/2021/the-detective-is-already-dead/NatsunagiNagisa.gif" className="glightbox preview-link">(The Detective Is Already Dead)</Link>
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

export default TheDetectiveIsAlreadyDead;
