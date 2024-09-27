import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const TheTestamentOfSisterNewDevil = () => {
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
                            <h2><span className="underlight">The Testament Of Sister New Devil</span></h2>
                            <a href='https://www.livechart.me/anime/470' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Naruse Maria */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/the-testament-of-sister-new-devil/NaruseMaria.gif" className="img-fluid" alt="Naruse Maria" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Naruse Maria</small>
                                            <br />
                                            <a href="img/anime/2015/the-testament-of-sister-new-devil/NaruseMaria.gif" className="glightbox preview-link">(The Testament Of Sister)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Naruse Mio */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/the-testament-of-sister-new-devil/NaruseMio.gif" className="img-fluid" alt="Naruse Mio" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Naruse Mio</small>
                                            <br />
                                            <a href="img/anime/2015/the-testament-of-sister-new-devil/NaruseMio.gif" className="glightbox preview-link">(The Testament Of Sister)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nonaka Yuki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/the-testament-of-sister-new-devil/NonakaYuki.gif" className="img-fluid" alt="Nonaka Yuki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nonaka Yuki</small>
                                            <br />
                                            <a href="img/anime/2015/the-testament-of-sister-new-devil/NonakaYuki.gif" className="glightbox preview-link">(The Testament Of Sister)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nonaka Kurumi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/the-testament-of-sister-new-devil/NonakaKurumi.gif" className="img-fluid" alt="Nonaka Kurumi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nonaka Kurumi</small>
                                            <br />
                                            <a href="img/anime/2015/the-testament-of-sister-new-devil/NonakaKurumi.gif" className="glightbox preview-link">(The Testament Of Sister)</a>
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

export default TheTestamentOfSisterNewDevil;
