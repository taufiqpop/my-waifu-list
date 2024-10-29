import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const HighSchoolDxD = () => {
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
                            <h2><span className="underlight">High School DxD</span></h2>
                            <a href='https://www.livechart.me/anime/1149' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Argento Asia */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/high-school-dxd/ArgentoAsia.gif" className="img-fluid" alt="Argento Asia" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Argento Asia</small>
                                            <br />
                                            <a href="img/anime/2012/high-school-dxd/ArgentoAsia.gif" className="glightbox preview-link">(High School DxD)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shidou Irina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/high-school-dxd/ShidouIrina.gif" className="img-fluid" alt="Shidou Irina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Shidou Irina</small>
                                            <br />
                                            <a href="img/anime/2012/high-school-dxd/ShidouIrina.gif" className="glightbox preview-link">(High School DxD)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gremory Rias */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/high-school-dxd/GremoryRias.gif" className="img-fluid" alt="Gremory Rias" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Gremory Rias</small>
                                            <br />
                                            <a href="img/anime/2012/high-school-dxd/GremoryRias.gif" className="glightbox preview-link">(High School DxD)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Himejima Akeno */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/high-school-dxd/HimejimaAkeno.gif" className="img-fluid" alt="Himejima Akeno" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Himejima Akeno</small>
                                            <br />
                                            <a href="img/anime/2012/high-school-dxd/HimejimaAkeno.gif" className="glightbox preview-link">(High School DxD)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Toujou Koneko */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2012/high-school-dxd/ToujouKoneko.webp" className="img-fluid" alt="Toujou Koneko" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Toujou Koneko</small>
                                            <br />
                                            <a href="img/anime/2012/high-school-dxd/ToujouKoneko.webp" className="glightbox preview-link">(High School DxD)</a>
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

export default HighSchoolDxD;
