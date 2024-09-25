import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const Home = () => {
    useEffect(() => {
        GLightbox({
            selector: '.glightbox',
        });
    }, []);

    return (
        <main className="main">
            {/* Home */}
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 justify-content-center">
                        

                        {/* Genshin Impact (Keqing) */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin impact/Keqing.jpg" className="img-fluid" alt="Keqing" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Keqing</small>
                                            <br />
                                            <a href="img/games/genshin impact/Keqing.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Genshin Impact (Kokomi) */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin impact/Kokomi.jpg" className="img-fluid" alt="Kokomi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sangonomiya Kokomi</small>
                                            <br />
                                            <a href="img/games/genshin impact/Kokomi.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Genshin Impact (Hu Tao) */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin impact/Hu Tao.jpg" className="img-fluid" alt="Hu Tao" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hu Tao</small>
                                            <br />
                                            <a href="img/games/genshin impact/Hu Tao.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Genshin Impact (Lumine) */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin impact/Lumine.jpg" className="img-fluid" alt="Lumine" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lumine</small>
                                            <br />
                                            <a href="img/games/genshin impact/Lumine.jpg" className="glightbox preview-link">(Genshin Impact)</a>
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

export default Home;
