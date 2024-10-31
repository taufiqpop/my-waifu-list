import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const RedoOfHealer = () => {
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
                            <h2><span className="underlight">Redo Of Healer</span></h2>
                            <Link href='https://www.livechart.me/anime/9682' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Jioral Norn Clatalissa */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/redo-of-healer/JioralNornClatalissa.gif" className="img-fluid" alt="Jioral Norn Clatalissa" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jioral Norn Clatalissa</small>
                                            <br />
                                            <Link href="img/anime/2021/redo-of-healer/JioralNornClatalissa.gif" className="glightbox preview-link">(Redo Of Healer)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jioral Flare Arlgrande */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/redo-of-healer/JioralFlareArlgrande.webp" className="img-fluid" alt="Jioral Flare Arlgrande" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jioral Flare Arlgrande</small>
                                            <br />
                                            <Link href="img/anime/2021/redo-of-healer/JioralFlareArlgrande.webp" className="glightbox preview-link">(Redo Of Healer)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Crylet Kureha */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/redo-of-healer/CryletKureha.gif" className="img-fluid" alt="Crylet Kureha" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Crylet Kureha</small>
                                            <br />
                                            <Link href="img/anime/2021/redo-of-healer/CryletKureha.gif" className="glightbox preview-link">(Redo Of Healer)</Link>
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

export default RedoOfHealer;
