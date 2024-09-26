import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const TrinitySeven = () => {
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
                            <h2><span className="underlight">Trinity Seven</span></h2>
                            <a href='https://www.livechart.me/anime/441' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Asami Lilith */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/trinity-seven/AsamiLilith.webp" className="img-fluid" alt="Asami Lilith" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Asami Lilith</small>
                                            <br />
                                            <a href="img/anime/2014/trinity-seven/AsamiLilith.webp" className="glightbox preview-link">(Trinity Seven)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kurata Yui */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/trinity-seven/KurataYui.gif" className="img-fluid" alt="Kurata Yui" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kurata Yui</small>
                                            <br />
                                            <a href="img/anime/2014/trinity-seven/KurataYui.gif" className="glightbox preview-link">(Trinity Seven)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sherlock Lieselotte */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/trinity-seven/SherlockLieselotte.gif" className="img-fluid" alt="Sherlock Lieselotte" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sherlock Lieselotte</small>
                                            <br />
                                            <a href="img/anime/2014/trinity-seven/SherlockLieselotte.gif" className="glightbox preview-link">(Trinity Seven)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sherlock Selina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/trinity-seven/SherlockSelina.webp" className="img-fluid" alt="Sherlock Selina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sherlock Selina</small>
                                            <br />
                                            <a href="img/anime/2014/trinity-seven/SherlockSelina.webp" className="glightbox preview-link">(Trinity Seven)</a>
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

export default TrinitySeven;
