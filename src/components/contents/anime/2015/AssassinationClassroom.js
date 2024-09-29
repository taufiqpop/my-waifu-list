import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const AssassinationClassroom = () => {
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
                            <h2><span className="underlight">Assassination Classroom</span></h2>
                            <a href='https://www.livechart.me/anime/638' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Kanzaki Yukiko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/assasination-classroom/KanzakiYukiko.webp" className="img-fluid" alt="Kanzaki Yukiko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kanzaki Yukiko</small>
                                            <br />
                                            <a href="img/anime/2015/assasination-classroom/KanzakiYukiko.webp" className="glightbox preview-link">(Assassination Classroom)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kayano Kaede */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/assasination-classroom/KayanoKaede.gif" className="img-fluid" alt="Kayano Kaede" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kayano Kaede</small>
                                            <br />
                                            <a href="img/anime/2015/assasination-classroom/KayanoKaede.gif" className="glightbox preview-link">(Assassination Classroom)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fuwa Yuzuki */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/assasination-classroom/FuwaYuzuki.gif" className="img-fluid" alt="Fuwa Yuzuki" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Fuwa Yuzuki</small>
                                            <br />
                                            <a href="img/anime/2015/assasination-classroom/FuwaYuzuki.gif" className="glightbox preview-link">(Assassination Classroom)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yada Touka */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/assasination-classroom/YadaTouka.gif" className="img-fluid" alt="Yada Touka" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yada Touka</small>
                                            <br />
                                            <a href="img/anime/2015/assasination-classroom/YadaTouka.gif" className="glightbox preview-link">(Assassination Classroom)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hayami Rinka */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2015/assasination-classroom/HayamiRinka.gif" className="img-fluid" alt="Hayami Rinka" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hayami Rinka</small>
                                            <br />
                                            <a href="img/anime/2015/assasination-classroom/HayamiRinka.gif" className="glightbox preview-link">(Assassination Classroom)</a>
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

export default AssassinationClassroom;
