import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const AlyaSometimesHidesHerFeelingsInRussian = () => {
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
                            <h2><span className="underlight">Alya Sometimes Hides Her Feelings In Russian (Roshidere)</span></h2>
                            <a href='https://www.livechart.me/anime/11873' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Masha */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Masha.jpg" className="img-fluid" alt="Masha" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Masha [Maria Mikhailovna Kujou]</small>
                                            <br />
                                            <a href="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Masha.jpg" className="glightbox preview-link">(Roshidere)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Alya */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Alya.png" className="img-fluid" alt="Alya" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Alya [Alisa Mikhailovna Kujou]</small>
                                            <br />
                                            <a href="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Alya.png" className="glightbox preview-link">(Roshidere)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Suou Yuki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/SuouYuki.png" className="img-fluid" alt="Suou Yuki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Suou Yuki</small>
                                            <br />
                                            <a href="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/SuouYuki.png" className="glightbox preview-link">(Roshidere)</a>
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

export default AlyaSometimesHidesHerFeelingsInRussian;
