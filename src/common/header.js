import React from 'react'
import TourLogic from '../commonJS/custom'
function Header() {
  return (
    <>
    <TourLogic />
    <div className="header">
    <div className="topLinks">
        <div className="container-xxl d-flex justify-content-between align-items-center">
            <ul className="list-inline d-flex">
                <li><a href="#">
                    <i className="fa fa-envelope"></i>
                    <span>info@phillycitytours.com</span>
                </a></li>
                <li><a href="#">
                    <i className="fa fa-map-marker-alt"></i>
                    <span>Philadelphia, US</span>
                </a></li>
            </ul>
            <ul className="list-inline d-flex gap-1">
                <li>Reviews</li>
                <li className="d-flex gap-1">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star-half text-warning"></i>
                </li>
                <li><small>4.8 / 5 Based on 725 reviews</small></li>
            </ul>
            <ul className="list-inline d-flex header-social">
                <li>EN</li>
                <li>|</li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
    </div>
    <div className="container-xxl">
        <div className="mainHeader">
            <div className="logo"><a href="./">Philly City Tours</a></div>
            <nav className="navi d-flex align-items-center gap-3">
                <ul className="list-inline d-none d-lg-flex">
                    <li><a href="./">Home</a></li>
                    <li><a href="javascript:;">About</a></li>
                    <li className="position-relative"><a href="philly-city-tours.php">Tours <i className="fa fa-chevron-down"></i></a>
                        <div className="dropdown">
                            <ul className="list-inline">
                                <li><a href="tour-details.php">Day Tour <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="tour-details.php">Night Tour <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="tour-details.php">4 Seater Private Tour <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="tour-details.php">7 Seater Private Tour <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="position-relative"><a href="javascript:;">Events <i className="fa fa-chevron-down"></i></a>
                        <div className="dropdown">
                            <ul className="list-inline">
                                <li><a href="#">Wedding Events <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="#">Bachelorette Party <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="#">Advertising Campaign <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="#">Corporate Event <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                                <li><a href="#">Birthday Party <i className="fa fa-arrow-up-right-from-square"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="javascript:;">Blogs</a></li>
                    <li><a href="javascript:;">Contact</a></li>
                </ul>
            </nav>
            <div className="cart-btnBox d-none d-lg-flex align-items-center gap-2">
                <a href="#" className="position-relative d-block"><span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">1</span><i className="fa fa-shopping-cart icon-circular"></i></a>
                <div className="readmore mt-0 w-auto">
                    <a href="#" className="button">Get In Touch <i className="fa fa-paper-plane"></i></a>
                </div>

                <button className="menuBtn d-flex d-lg-none"><span></span></button>
            </div>
        </div>
    </div>
</div>
    </>


  )
}

export default Header