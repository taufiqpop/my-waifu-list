import React from 'react';

const Header = () => {
return (
    <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-around">

            <a href="https://taufiqpop.github.io/my-waifu-list/" className="logo d-flex align-items-center me-auto me-xl-0">
                <i className="bi bi-heart"></i>
                <h1 className="sitename">My Waifu List&nbsp;</h1>
                <i className="bi bi-heart"></i>
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li><a href="https://taufiqpop.github.io/my-waifu-list/" className="active">Home<br /></a></li>
                    <li className="dropdown">
                        <a href="#"><span>Anime</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li className="dropdown">
                                <a href="#"><span>&nbsp; 2010</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="contents/anime/angelbeats.html">Angel Beats!</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#"><span>&nbsp; 2014</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="contents/anime/akamegakill.html">Akame Ga Kill!</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#"><span>&nbsp; 2015</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="contents/anime/charlotte.html">Charlotte</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#"><span>&nbsp; 2017</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="contents/anime/akashicrecords.html">Akashic Records</a></li>
                                    <li><a href="contents/anime/cote.html">Classroom Of The Elite</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#"><span>Games</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="contents/games/genshin.html">Genshin Impact</a></li>
                            <li><a href="contents/games/hsr.html">Honkai Star Rail</a></li>
                            <li><a href="contents/games/wuwaves.html">Wuthering Waves</a></li>
                        </ul>
                    </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

        </div>
    </header>
);
}

export default Header;