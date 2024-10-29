import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const GenshinImpact = () => {
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
                            <h2><span className="underlight">Genshin Impact</span></h2>
                            <a href='https://genshin.hoyoverse.com/en/home' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 10/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Hu Tao */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/HuTao.gif" className="img-fluid" alt="Hu Tao" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hu Tao</small>
                                            <br />
                                            <a href="img/games/genshin-impact/HuTao.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sangonomiya Kokomi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/SangonomiyaKokomi.gif" className="img-fluid" alt="Sangonomiya Kokomi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sangonomiya Kokomi</small>
                                            <br />
                                            <a href="img/games/genshin-impact/SangonomiyaKokomi.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Keqing */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Keqing.gif" className="img-fluid" alt="Keqing" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Keqing</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Keqing.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lumine */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Lumine.gif" className="img-fluid" alt="Lumine" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lumine</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Lumine.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mualani */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Mualani.gif" className="img-fluid" alt="Mualani" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Mualani</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Mualani.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nilou */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Nilou.gif" className="img-fluid" alt="Nilou" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nilou</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Nilou.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nahida */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Nahida.gif" className="img-fluid" alt="Nahida" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nahida</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Nahida.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Furina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Furina.gif" className="img-fluid" alt="Furina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Furina</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Furina.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Raiden Shogun */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/RaidenShogun.gif" className="img-fluid" alt="Raiden Shogun" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Raiden Shogun</small>
                                            <br />
                                            <a href="img/games/genshin-impact/RaidenShogun.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kamisato Ayaka */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/KamisatoAyaka.gif" className="img-fluid" alt="Kamisato Ayaka" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kamisato Ayaka</small>
                                            <br />
                                            <a href="img/games/genshin-impact/KamisatoAyaka.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navia */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Navia.webp" className="img-fluid" alt="Navia" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Navia</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Navia.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ganyu */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Ganyu.webp" className="img-fluid" alt="Ganyu" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Ganyu</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Ganyu.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Klee */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Klee.gif" className="img-fluid" alt="Klee" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Klee</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Klee.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yoimiya */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Yoimiya.gif" className="img-fluid" alt="Yoimiya" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yoimiya</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Yoimiya.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mona */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Mona.webp" className="img-fluid" alt="Mona" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Mona</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Mona.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Clorinde */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Clorinde.gif" className="img-fluid" alt="Clorinde" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Clorinde</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Clorinde.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chiori */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Chiori.webp" className="img-fluid" alt="Chiori" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Chiori</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Chiori.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lynette */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Lynette.webp" className="img-fluid" alt="Lynette" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lynette</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Lynette.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Eula */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Eula.gif" className="img-fluid" alt="Eula" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Eula</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Eula.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yaoyao */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Yaoyao.gif" className="img-fluid" alt="Yaoyao" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yaoyao</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Yaoyao.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charlotte */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Charlotte.gif" className="img-fluid" alt="Charlotte" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Charlotte</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Charlotte.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Collei.gif" className="img-fluid" alt="Collei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Collei</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Collei.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Diona */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Diona.gif" className="img-fluid" alt="Diona" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Diona</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Diona.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layla */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Layla.gif" className="img-fluid" alt="Layla" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Layla</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Layla.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jean */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Jean.webp" className="img-fluid" alt="Jean" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jean</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Jean.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Xiangling */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Xiangling.gif" className="img-fluid" alt="Xiangling" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Xiangling</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Xiangling.gif" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yanfei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Yanfei.webp" className="img-fluid" alt="Yanfei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yanfei</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Yanfei.webp" className="glightbox preview-link">(Genshin Impact)</a>
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

export default GenshinImpact;
