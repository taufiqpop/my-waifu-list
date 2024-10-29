import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const MyHeroAcademia = () => {
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
                            <h2><span className="underlight">My Hero Academia</span></h2>
                            <a href='https://www.livechart.me/anime/1895' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Uraraka Ochako */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/my-hero-academia/UrarakaOchako.gif" className="img-fluid" alt="Uraraka Ochako" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Uraraka Ochako</small>
                                            <br />
                                            <a href="img/anime/2016/my-hero-academia/UrarakaOchako.gif" className="glightbox preview-link">(My Hero Academia)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hagakure Tooru */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/my-hero-academia/HagakureTooru.gif" className="img-fluid" alt="Hagakure Tooru" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hagakure Tooru</small>
                                            <br />
                                            <a href="img/anime/2016/my-hero-academia/HagakureTooru.gif" className="glightbox preview-link">(My Hero Academia)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Toga Himiko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2016/my-hero-academia/TogaHimiko.gif" className="img-fluid" alt="Toga Himiko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Toga Himiko</small>
                                            <br />
                                            <a href="img/anime/2016/my-hero-academia/TogaHimiko.gif" className="glightbox preview-link">(My Hero Academia)</a>
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

export default MyHeroAcademia;
