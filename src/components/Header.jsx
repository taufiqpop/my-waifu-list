import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);
    const [currentAudio, setCurrentAudio] = useState('audio/JulieMixTape.mp3');

    const audioTracks = [
        'audio/HSR_TheGameIsOn.mp3',
        'audio/JudgementOfEuthymia.mp3',
        'audio/DAL_Pride.mp3',
        'audio/Hamsterball.mp3',
    ];

    const getRandomAudio = () => {
        const randomIndex = Math.floor(Math.random() * audioTracks.length);
        return audioTracks[randomIndex];
    };

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            const newAudio = getRandomAudio();
            setCurrentAudio(newAudio);
            audioRef.current.src = newAudio;
            audioRef.current.muted = false;
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

        function mobileNavToggle() {
            document.querySelector("body").classList.toggle("mobile-nav-active");
            mobileNavToggleBtn.classList.toggle("bi-list");
            mobileNavToggleBtn.classList.toggle("bi-x");
        }

        mobileNavToggleBtn.addEventListener("click", mobileNavToggle);

        document.querySelectorAll("#navmenu a").forEach((navmenu) => {
            navmenu.addEventListener("click", () => {
            if (document.querySelector(".mobile-nav-active")) {
                mobileNavToggle();
            }
            });
        });

        document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
            navmenu.addEventListener("click", function (e) {
            if (document.querySelector(".mobile-nav-active")) {
                e.preventDefault();
                this.parentNode.classList.toggle("active");
                this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
                e.stopImmediatePropagation();
            }
            });
        });

        return () => {
            mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
            document.querySelectorAll("#navmenu a").forEach((navmenu) => {
            navmenu.removeEventListener("click", () => {});
            });
            document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
            navmenu.removeEventListener("click", () => {});
            });
        };
    }, []);

    return (
    <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-around">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <i className="bi bi-heart"></i>
            <h1 className="sitename">My Waifu List&nbsp;</h1>
            <i className="bi bi-heart"></i>
        </Link>

        <nav id="navmenu" className="navmenu">
            <ul>
                <li>
                    {/* Audio Element */}
                    <audio ref={audioRef} muted autoPlay loop>
                        <source src={currentAudio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>

                    {/* Audio Toggle Button */}
                    <center>

                    <button className="btn btn-dark d-flex align-items-center" onClick={toggleAudio}>
                        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                    </button>
                    </center>
                </li>

                <li><Link to="/" className="active">Home</Link></li>
                <li className="dropdown">
                <Link href="javascript:void(0)"><span>Anime</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                    {/* Anime <= 2014 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; {"≤ 2014"}</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/1996/detective-conan">Detective Conan</Link></li>
                            <li><Link to="/anime/2010/angel-beats">Angel Beats</Link></li>
                            <li><Link to="/anime/2010/kiss-x-sis">Kiss X Sis</Link></li>
                            <li><Link to="/anime/2010/hyakka-ryouran">Hyakka Ryouran</Link></li>
                            <li><Link to="/anime/2011/infinite-stratos">Infinite Stratos</Link></li>
                            <li><Link to="/anime/2012/sword-art-online">Sword Art Online</Link></li>
                            <li><Link to="/anime/2012/high-school-dxd">High School DxD</Link></li>
                            <li><Link to="/anime/2013/danganronpa">Danganronpa</Link></li>
                            <li><Link to="/anime/2013/date-a-live">Date A Live</Link></li>
                            <li><Link to="/anime/2013/my-teen-romantic-comedy">My Teen Romantic Comedy</Link></li>
                            <li><Link to="/anime/2014/akame-ga-kill">Akame Ga Kill!</Link></li>
                            <li><Link to="/anime/2014/no-game-no-life">No Game No Life</Link></li>
                            <li><Link to="/anime/2014/trinity-seven">Trinity Seven</Link></li>
                        </ul>
                    </li>

                    {/* Anime 2015 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2015</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2015/assassination-classroom">Assassination Classroom</Link></li>
                            <li><Link to="/anime/2015/charlotte">Charlotte</Link></li>
                            <li><Link to="/anime/2015/shokugeki-no-souma">Shokugeki No Souma</Link></li>
                            <li><Link to="/anime/2015/himouto-umaru-chan">Himouto! Umaru-chan</Link></li>
                            <li><Link to="/anime/2015/rakudai-kishi-no-cavalry">Rakudai Kishi No Cavalry</Link></li>
                            <li><Link to="/anime/2015/the-testament-of-sister-new-devil">The Testament Of Sister New Devil</Link></li>
                        </ul>
                    </li>

                    {/* Anime 2016 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2016</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2016/konosuba">KonoSuba</Link></li>
                            <li><Link to="/anime/2016/my-hero-academia">My Hero Academia</Link></li>
                        </ul>
                    </li>

                    {/* Anime 2017 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2017</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2017/akashic-records">Akashic Records</Link></li>
                            <li><Link to="/anime/2017/classroom-of-the-elite">Classroom Of The Elite</Link></li>
                            <li><Link to="/anime/2017/eromanga-sensei">Eromanga-sensei</Link></li>
                            <li><Link to="/anime/2017/gabriel-dropout">Gabriel DropOut</Link></li>
                            <li><Link to="/anime/2017/in-another-world-with-my-smartphone">Isekai Wa Smartphone</Link></li>
                            <li><Link to="/anime/2017/kakegurui">Kakegurui</Link></li>
                            <li><Link to="/anime/2017/masamune-revenge">Masamune's Revenge</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2018 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2018</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2018/rascal-does-not-dream-of-bunny-girl-senpai">Seishun Buta Yarou</Link></li>
                            <li><Link to="/anime/2018/goblin-slayer">Goblin Slayer</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2019 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2019</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2019/love-is-war">Kaguya-Sama : Love Is War</Link></li>
                            <li><Link to="/anime/2019/demon-slayer">Demon Slayer</Link></li>
                            <li><Link to="/anime/2019/that-time-i-got-reincarnated-as-a-slime">Tensura</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2021 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2021</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2021/redo-of-healer">Redo Of Healer</Link></li>
                            <li><Link to="/anime/2021/the-detective-is-already-dead">The Detective Is Already Dead</Link></li>
                            <li><Link to="/anime/2021/mushoku-tensei">Mushoku Tensei</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2022 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2022</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2022/lycoris-recoil">Lycoris Recoil</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2023 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2023</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2023/frieren-beyond-journey-end">Frieren Beyond Journey's End</Link></li>
                            <li><Link to="/anime/2023/oshi-no-ko">Oshi No Ko</Link></li>
                            <li><Link to="/anime/2023/tearmoon-empire">Tearmoon Empire</Link></li>
                            <li><Link to="/anime/2023/the-dreaming-boy-is-a-realist">The Dreaming Boy Is A Realist</Link></li>
                        </ul>
                    </li>
                    
                    {/* Anime 2024 */}
                    <li className="dropdown">
                        <Link href="javascript:void(0)"><span>&nbsp; 2024</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                        <ul>
                            <li><Link to="/anime/2024/alya-sometimes-hides-her-feelings-in-russian">Roshidere</Link></li>
                            <li><Link to="/anime/2024/blue-archive-the-animation">Blue Archive The Animation</Link></li>
                        </ul>
                    </li>
                </ul>
                </li>
                <li className="dropdown">
                    <Link href="javascript:void(0)"><span>Games</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                    <ul>
                        <li><Link to="/games/genshin-impact">Genshin Impact</Link></li>
                        <li><Link to="/games/honkai-star-rail">Honkai Star Rail</Link></li>
                        <li><Link to="/games/wuthering-waves">Wuthering Waves</Link></li>
                    </ul>
                </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        </div>
    </header>
    );
};

export default Header;
