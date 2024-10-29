import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const WutheringWaves = () => {
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
                            <h2><span className="underlight">Wuthering Waves</span></h2>
                            <a href='https://wutheringwaves.kurogames.com/en/main/' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 9/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Jinhsi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Jinhsi.gif" className="img-fluid" alt="Jinhsi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jinhsi</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Jinhsi.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shorekeeper */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Shorekeeper.gif" className="img-fluid" alt="Shorekeeper" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shorekeeper</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Shorekeeper.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Baizhi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Baizhi.gif" className="img-fluid" alt="Baizhi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Baizhi</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Baizhi.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Danjin */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Danjin.gif" className="img-fluid" alt="Danjin" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Danjin</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Danjin.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sanhua */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Sanhua.gif" className="img-fluid" alt="Sanhua" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sanhua</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Sanhua.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yangyang */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Yangyang.gif" className="img-fluid" alt="Yangyang" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yangyang</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Yangyang.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Encore */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Encore.gif" className="img-fluid" alt="Encore" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Encore</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Encore.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rover */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Rover.gif" className="img-fluid" alt="Rover" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Rover</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Rover.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Camellya */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Camellya.gif" className="img-fluid" alt="Camellya" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Camellya</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Camellya.gif" className="glightbox preview-link">(Wuthering Waves)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jianxin */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Jianxin.gif" className="img-fluid" alt="Jianxin" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jianxin</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Jianxin.gif" className="glightbox preview-link">(Wuthering Waves)</a>
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

export default WutheringWaves;
