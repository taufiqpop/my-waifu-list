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
            <section id="gallery" className="gallery section">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
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
                                            <a href="img/anime/2017/classroom-of-the-elite/IchinoseHonami.gif" className="glightbox preview-link">(Classroom Of The Elite)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Masha */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Masha.gif" className="img-fluid" alt="Masha" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Masha [Maria Mikhailovna Kujou]</small>
                                            <br />
                                            <a href="img/anime/2024/alya-sometimes-hides-her-feelings-in-russian/Masha.gif" className="glightbox preview-link">(Roshidere)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nishikigi Chisato */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2022/lycoris-recoil/NishikigiChisato.gif" className="img-fluid" alt="Nishikigi Chisato" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nishikigi Chisato</small>
                                            <br />
                                            <a href="img/anime/2022/lycoris-recoil/NishikigiChisato.gif" className="glightbox preview-link">(Lycoris Recoil)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mualani */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Mualani.webp" className="img-fluid" alt="Mualani" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Mualani</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Mualani.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hoshino Ruby */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2023/oshi-no-ko/HoshinoRuby.gif" className="img-fluid" alt="Hoshino Ruby" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Hoshino Ruby</small>
                                            <br />
                                            <a href="img/anime/2023/oshi-no-ko/HoshinoRuby.gif" className="glightbox preview-link">(Oshi No Ko)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kurata Yui */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/trinity-seven/KurataYui.gif" className="img-fluid" alt="Kurata Yui" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kurata Yui</small>
                                            <br />
                                            <a href="img/anime/2014/trinity-seven/KurataYui.gif" className="glightbox preview-link">(Trinity Seven)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inoue Takina */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2022/lycoris-recoil/InoueTakina.gif" className="img-fluid" alt="Inoue Takina" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Inoue Takina</small>
                                            <br />
                                            <a href="img/anime/2022/lycoris-recoil/InoueTakina.gif" className="glightbox preview-link">(Lycoris Recoil)</a>
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
                                            <a href="img/anime/2017/classroom-of-the-elite/SakayanagiArisu.gif" className="glightbox preview-link">(Classroom Of The Elite)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sangonomiya Kokomi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/SangonomiyaKokomi.jpg" className="img-fluid" alt="Sangonomiya Kokomi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Sangonomiya Kokomi</small>
                                            <br />
                                            <a href="img/games/genshin-impact/SangonomiyaKokomi.jpg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nilou */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/genshin-impact/Nilou.webp" className="img-fluid" alt="Nilou" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Nilou</small>
                                            <br />
                                            <a href="img/games/genshin-impact/Nilou.webp" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kurome */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2014/akame-ga-kill/Kurome.gif" className="img-fluid" alt="Kurome" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Kurome</small>
                                            <br />
                                            <a href="img/anime/2014/akame-ga-kill/Kurome.gif" className="glightbox preview-link">(Akame Ga Kill)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Firefly */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/honkai-star-rail/Firefly.jpeg" className="img-fluid" alt="Firefly" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Firefly</small>
                                            <br />
                                            <a href="img/games/honkai-star-rail/Firefly.jpeg" className="glightbox preview-link">(Genshin Impact)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Itsuka Kotori */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2013/date-a-live/ItsukaKotori.gif" className="img-fluid" alt="Itsuka Kotori" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Itsuka Kotori</small>
                                            <br />
                                            <a href="img/anime/2013/date-a-live/ItsukaKotori.gif" className="glightbox preview-link">(Date A Live)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Migurdia Roxy */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2021/mushoku-tensei/MigurdiaRoxy.gif" className="img-fluid" alt="Migurdia Roxy" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Migurdia Roxy</small>
                                            <br />
                                            <a href="img/anime/2021/mushoku-tensei/MigurdiaRoxy.gif" className="glightbox preview-link">(Mushoku Tensei)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fujiwara Chika */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/anime/2019/love-is-war/FujiwaraChika.gif" className="img-fluid" alt="Fujiwara Chika" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Fujiwara Chika</small>
                                            <br />
                                            <a href="img/anime/2019/love-is-war/FujiwaraChika.gif" className="glightbox preview-link">(Kaguya-sama : Love Is War)</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jinhsi */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="gallery-item h-100">
                                <img src="img/games/wuthering-waves/Jinhsi.jpeg" className="img-fluid" alt="Jinhsi" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                    <div className="card-img-overlay d-flex align-items-center p-0">
                                        <h5 className="card-title text-center flex-fill p-3 fs-4 waifu-overlay">
                                            <small>Jinhsi</small>
                                            <br />
                                            <a href="img/games/wuthering-waves/Jinhsi.jpeg" className="glightbox preview-link">(Wuthering Waves)</a>
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
