import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const HonkaiStarRail = () => {
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
                            <h2><span className="underlight">Honkai Star Rail</span></h2>
                            <a href='https://hsr.hoyoverse.com/en-us/home' target='_blank' className="btn-get-started my-rating">My Rating ⭐ 9/10<br /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4 justify-content-center">

                        {/* Firefly */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Firefly.webp" className="img-fluid" alt="Firefly" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Firefly</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Firefly.webp" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Silver Wolf */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/SilverWolf.gif" className="img-fluid" alt="SilverWolf" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Silver Wolf</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/SilverWolf.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fu Xuan */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/FuXuan.gif" className="img-fluid" alt="FuXuan" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Fu Xuan</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/FuXuan.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sparkle */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Sparkle.gif" className="img-fluid" alt="Sparkle" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sparkle</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Sparkle.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* March 7th */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/March7th.gif" className="img-fluid" alt="March7th" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>March 7th</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/March7th.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stelle */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Stelle.gif" className="img-fluid" alt="Stelle" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Stelle</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Stelle.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Acheron */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Acheron.gif" className="img-fluid" alt="Acheron" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Acheron</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Acheron.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lynx */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Lynx.gif" className="img-fluid" alt="Lynx" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lynx</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Lynx.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ruan Mei */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/RuanMei.gif" className="img-fluid" alt="RuanMei" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Ruan Mei</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/RuanMei.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bronya */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Bronya.gif" className="img-fluid" alt="Bronya" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Bronya</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Bronya.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seele */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Seele.gif" className="img-fluid" alt="Seele" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Seele</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Seele.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Topaz */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Topaz.gif" className="img-fluid" alt="Topaz" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Topaz</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Topaz.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jingliu */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Jingliu.gif" className="img-fluid" alt="Jingliu" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jingliu</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Jingliu.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Clara */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Clara.webp" className="img-fluid" alt="Clara" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Clara</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Clara.webp" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HuoHuo */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/HuoHuo.gif" className="img-fluid" alt="HuoHuo" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>HuoHuo</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/HuoHuo.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Robin */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Robin.gif" className="img-fluid" alt="Robin" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Robin</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Robin.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Yunli */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Yunli.gif" className="img-fluid" alt="Yunli" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Yunli</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Yunli.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Qingque */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Qingque.webp" className="img-fluid" alt="Qingque" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Qingque</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Qingque.webp" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lingsha */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Lingsha.gif" className="img-fluid" alt="Lingsha" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Lingsha</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Lingsha.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guinaifen */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Guinaifen.gif" className="img-fluid" alt="Guinaifen" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Guinaifen</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Guinaifen.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sushang */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Sushang.gif" className="img-fluid" alt="Sushang" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sushang</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Sushang.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tingyun */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Tingyun.webp" className="img-fluid" alt="Tingyun" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Tingyun</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Tingyun.webp" className="glightbox preview-link">(Honkai Star Rail)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Herta */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Herta.gif" className="img-fluid" alt="Herta" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Herta</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Herta.gif" className="glightbox preview-link">(Honkai Star Rail)</a>
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

export default HonkaiStarRail;
