import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const GoblinSlayer = () => {
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
                            <h2><span className="underlight">Goblin Slayer</span></h2>
                            <a href='https://www.livechart.me/anime/3109' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Onna Shinkan */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/goblin-slayer/OnnaShinkan.gif" className="img-fluid" alt="Onna Shinkan" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Onna Shinkan</small>
                                            <br />
                                            <a href="img/anime/2018/goblin-slayer/OnnaShinkan.gif" className="glightbox preview-link">(Goblin Slayer)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ushikai Musume */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/goblin-slayer/UshikaiMusume.webp" className="img-fluid" alt="Ushikai Musume" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Ushikai Musume</small>
                                            <br />
                                            <a href="img/anime/2018/goblin-slayer/UshikaiMusume.webp" className="glightbox preview-link">(Goblin Slayer)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elf */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2018/goblin-slayer/Elf.gif" className="img-fluid" alt="Elf" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Elf</small>
                                            <br />
                                            <a href="img/anime/2018/goblin-slayer/Elf.gif" className="glightbox preview-link">(Goblin Slayer)</a>
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

export default GoblinSlayer;
