import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const DemonSlayer = () => {
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
                            <h2><span className="underlight">Demon Slayer</span></h2>
                            <Link href='https://www.livechart.me/anime/3311' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Tsuyuri Kanao */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/demon-slayer/TsuyuriKanao.gif" className="img-fluid" alt="Tsuyuri Kanao" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tsuyuri Kanao</small>
                                            <br />
                                            <Link href="img/anime/2019/demon-slayer/TsuyuriKanao.gif" className="glightbox preview-link">(Demon Slayer)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kochou Shinobu */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/demon-slayer/KochouShinobu.gif" className="img-fluid" alt="Kochou Shinobu" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kochou Shinobu</small>
                                            <br />
                                            <Link href="img/anime/2019/demon-slayer/KochouShinobu.gif" className="glightbox preview-link">(Demon Slayer)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kamado Nezuko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/demon-slayer/KamadoNezuko.gif" className="img-fluid" alt="Kamado Nezuko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kamado Nezuko</small>
                                            <br />
                                            <Link href="img/anime/2019/demon-slayer/KamadoNezuko.gif" className="glightbox preview-link">(Demon Slayer)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kanroji Mitsuri */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/demon-slayer/KanrojiMitsuri.gif" className="img-fluid" alt="Kanroji Mitsuri" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kanroji Mitsuri</small>
                                            <br />
                                            <Link href="img/anime/2019/demon-slayer/KanrojiMitsuri.gif" className="glightbox preview-link">(Demon Slayer)</Link>
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

export default DemonSlayer;
