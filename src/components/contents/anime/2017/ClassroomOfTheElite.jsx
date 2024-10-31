import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const ClassroomOfTheElite = () => {
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
                            <h2><span className="underlight">Classroom Of The Elite</span></h2>
                            <Link href='https://www.livechart.me/anime/2688' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Ichinose Honami */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/IchinoseHonami.gif" className="img-fluid" alt="Ichinose Honami" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Ichinose Honami</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/IchinoseHonami.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kushida Kikyou */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/KushidaKikyou.gif" className="img-fluid" alt="Kushida Kikyou" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kushida Kikyou</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/KushidaKikyou.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sakayanagi Arisu */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/SakayanagiArisu.gif" className="img-fluid" alt="Sakayanagi Arisu" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sakayanagi Arisu</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/SakayanagiArisu.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Karuizawa Kei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/KaruizawaKei.gif" className="img-fluid" alt="Karuizawa Kei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Karuizawa Kei</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/KaruizawaKei.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shiina Hiyori */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/ShiinaHiyori.gif" className="img-fluid" alt="Shiina Hiyori" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shiina Hiyori</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/ShiinaHiyori.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Horikita Suzune */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/HorikitaSuzune.gif" className="img-fluid" alt="Horikita Suzune" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Horikita Suzune</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/HorikitaSuzune.gif" className="glightbox preview-link">(Classroom Of The Elite)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Asahina Nazuna */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2017/classroom-of-the-elite/AsahinaNazuna.jpeg" className="img-fluid" alt="Asahina Nazuna" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Asahina Nazuna</small>
                                            <br />
                                            <Link href="img/anime/2017/classroom-of-the-elite/AsahinaNazuna.jpeg" className="glightbox preview-link">(Classroom Of The Elite)</Link>
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

export default ClassroomOfTheElite;
