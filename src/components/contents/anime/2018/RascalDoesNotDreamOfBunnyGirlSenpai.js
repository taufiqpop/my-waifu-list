import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const RascalDoesNotDreamOfBunnyGirlSenpai = () => {
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
                            <h2><span className="underlight">Rascal Does Not Dream Of Bunny Girl Senpai</span></h2>
                            <a href='https://www.livechart.me/anime/3147' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Sakurajima Mai */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/SakurajimaMai.gif" className="img-fluid" alt="Sakurajima Mai" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sakurajima Mai</small>
                                            <br />
                                            <a href="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/SakurajimaMai.gif" className="glightbox preview-link">(Rascal Does Not Dream)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Azusagawa Kaede */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/AzusagawaKaede.gif" className="img-fluid" alt="Azusagawa Kaede" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Azusagawa Kaede</small>
                                            <br />
                                            <a href="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/AzusagawaKaede.gif" className="glightbox preview-link">(Rascal Does Not Dream)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Makinohara Shouko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/MakinoharaShouko.gif" className="img-fluid" alt="Makinohara Shouko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Makinohara Shouko</small>
                                            <br />
                                            <a href="img/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai/MakinoharaShouko.gif" className="glightbox preview-link">(Rascal Does Not Dream)</a>
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

export default RascalDoesNotDreamOfBunnyGirlSenpai;
