import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <li><Link to="/" className="active">Home</Link></li>
                        <li className="dropdown">
                        <a href="javascript:void(0)"><span>Anime</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li className="dropdown">
                                <a href="javascript:void(0)"><span>&nbsp; 2017</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><Link to="/anime/2017/akashic-records">Akashic Records</Link></li>
                                    <li><Link to="/anime/2017/classroom-of-the-elite">Classroom Of The Elite</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                        <li className="dropdown">
                            <a href="javascript:void(0)"><span>Games</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
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