import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const HyakkaRyouran = () => {
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
                            <h2><span className="underlight">Hyakka Ryouran</span></h2>
                            <Link href='https://www.livechart.me/anime/3694' target="_blank" rel="noreferrer" className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Yagyuu Juubei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/hyakka-ryouran/YagyuuJuubei.gif" className="img-fluid" alt="Yagyuu Juubei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yagyuu Juubei</small>
                                            <br />
                                            <Link href="img/anime/2010/hyakka-ryouran/YagyuuJuubei.gif" className="glightbox preview-link">(Hyakka Ryouran)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maeda Keiji */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/hyakka-ryouran/MaedaKeiji.gif" className="img-fluid" alt="Maeda Keiji" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Maeda Keiji</small>
                                            <br />
                                            <Link href="img/anime/2010/hyakka-ryouran/MaedaKeiji.gif" className="glightbox preview-link">(Hyakka Ryouran)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Naoe Kanetsugu */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/hyakka-ryouran/NaoeKanetsugu.gif" className="img-fluid" alt="Naoe Kanetsugu" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Naoe Kanetsugu</small>
                                            <br />
                                            <Link href="img/anime/2010/hyakka-ryouran/NaoeKanetsugu.gif" className="glightbox preview-link">(Hyakka Ryouran)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tokugawa Sen */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/hyakka-ryouran/TokugawaSen.gif" className="img-fluid" alt="Tokugawa Sen" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tokugawa Sen</small>
                                            <br />
                                            <Link href="img/anime/2010/hyakka-ryouran/TokugawaSen.gif" className="glightbox preview-link">(Hyakka Ryouran)</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sanada Yukimura */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2010/hyakka-ryouran/SanadaYukimura.gif" className="img-fluid" alt="Sanada Yukimura" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sanada Yukimura</small>
                                            <br />
                                            <Link href="img/anime/2010/hyakka-ryouran/SanadaYukimura.gif" className="glightbox preview-link">(Hyakka Ryouran)</Link>
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

export default HyakkaRyouran;
