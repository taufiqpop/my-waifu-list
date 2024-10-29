import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const SwordArtOnline = () => {
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
                            <h2><span className="underlight">Sword Art Online</span></h2>
                            <a href='https://www.livechart.me/anime/1038' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Yuuki Asuna */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/YuukiAsuna.gif" className="img-fluid" alt="Yuuki Asuna" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yuuki Asuna</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/YuukiAsuna.gif" className="glightbox preview-link">(Sword Art Online)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Asada Shino */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/AsadaShino.gif" className="img-fluid" alt="Asada Shino" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Asada Shino</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/AsadaShino.gif" className="glightbox preview-link">(Sword Art Online)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kirigaya Suguha */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/KirigayaSuguha.webp" className="img-fluid" alt="Kirigaya Suguha" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kirigaya Suguha</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/KirigayaSuguha.webp" className="glightbox preview-link">(Sword Art Online)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Zuberg Alice */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/ZubergAlice.webp" className="img-fluid" alt="Zuberg Alice" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Zuberg Alice</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/ZubergAlice.webp" className="glightbox preview-link">(Sword Art Online)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quinella */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/Quinella.gif" className="img-fluid" alt="Quinella" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Quinella</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/Quinella.gif" className="glightbox preview-link">(Sword Art Online)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LLENN */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/sword-art-online/LLENN.gif" className="img-fluid" alt="LLENN" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>LLENN</small>
                                            <br />
                                            <a href="img/anime/2012/sword-art-online/LLENN.gif" className="glightbox preview-link">(Sword Art Online)</a>
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

export default SwordArtOnline;
