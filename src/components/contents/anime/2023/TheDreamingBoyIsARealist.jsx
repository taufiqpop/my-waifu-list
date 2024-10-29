import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const TheDreamingBoyIsARealist = () => {
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
                            <h2><span className="underlight">The Dreaming Boy Is A Realist</span></h2>
                            <a href='https://www.livechart.me/anime/11547' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Natsukawa Aika */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/the-dreaming-boy-is-a-realist/NatsukawaAika.gif" className="img-fluid" alt="Natsukawa Aika" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Natsukawa Aika</small>
                                            <br />
                                            <a href="img/anime/2023/the-dreaming-boy-is-a-realist/NatsukawaAika.gif" className="glightbox preview-link">(The Dreaming Boy Is A Realist)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sajou Kaede */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/the-dreaming-boy-is-a-realist/SajouKaede.gif" className="img-fluid" alt="Sajou Kaede" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sajou Kaede</small>
                                            <br />
                                            <a href="img/anime/2023/the-dreaming-boy-is-a-realist/SajouKaede.gif" className="glightbox preview-link">(The Dreaming Boy Is A Realist)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ashida Kei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/the-dreaming-boy-is-a-realist/AshidaKei.gif" className="img-fluid" alt="Ashida Kei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Ashida Kei</small>
                                            <br />
                                            <a href="img/anime/2023/the-dreaming-boy-is-a-realist/AshidaKei.gif" className="glightbox preview-link">(The Dreaming Boy Is A Realist)</a>
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

export default TheDreamingBoyIsARealist;
