import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const ShokugekiNoSouma = () => {
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
                            <h2><span className="underlight">Shokugeki No Souma</span></h2>
                            <a href='https://www.livechart.me/anime/1275' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Tadokoro Megumi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/shokugeki-no-souma/TadokoroMegumi.jpg" className="img-fluid" alt="Tadokoro Megumi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tadokoro Megumi</small>
                                            <br />
                                            <a href="img/anime/2015/shokugeki-no-souma/TadokoroMegumi.jpg" className="glightbox preview-link">(Shokugeki No Souma)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nakiri Erina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/shokugeki-no-souma/NakiriErina.webp" className="img-fluid" alt="Nakiri Erina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nakiri Erina</small>
                                            <br />
                                            <a href="img/anime/2015/shokugeki-no-souma/NakiriErina.webp" className="glightbox preview-link">(Shokugeki No Souma)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arato Hisako */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/shokugeki-no-souma/AratoHisako.webp" className="img-fluid" alt="Arato Hisako" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Arato Hisako</small>
                                            <br />
                                            <a href="img/anime/2015/shokugeki-no-souma/AratoHisako.webp" className="glightbox preview-link">(Shokugeki No Souma)</a>
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

export default ShokugekiNoSouma;
