import React from 'react'

function AboutUs() {
  return (
    <section className="w-100 position-relative overflow-hidden padding pb-0 bg-light section-overview">
            <div className="container-lg">
                <div className="row g-4 justify-content-around">
                    <div className="col-lg-5 overview-imgBox">
                        <div className="img-fluid position-relative h-100"><img src="./images/slide1.jpg" className="h-100" alt="" /></div>
                    </div>
                    <div className="col-lg-6 overview-">
                        <div className="inner ps-lg-5">
                            <div className="sec-title">
                                <span className="h6 sec-title__tagline">about philly city tours</span>
                                <h2 className="h1 mb-0">Discover <span className="text-third">Philadelphia</span> with our guide</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor laudantium, nam asperiores eligendi est, eaque enim magnam reprehenderit sequi facilis dignissimos nostrum quo suscipit aliquam! Placeat tempora cum cumque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis suscipit eveniet maxime nulla similique harum, ab repudiandae amet laboriosam possimus!</p>
                            <ul className="list-inline list-unstyled">
                                <li className="d-flex align-items-center gap-2"><i className="fa fa-check icon-circular sm"></i><span>20 Years of Experience</span></li>
                                <li className="d-flex align-items-center gap-2"><i className="fa fa-check icon-circular sm"></i><span>20 Years of Experience</span></li>
                            </ul>
                            <div className="phone-call mb-4">
                                <i className="fa fa-phone-volume"></i>
                                <div className="text">
                                    <p className="mb-0">For information</p>
                                    <a href="tel:+19292573451">929 257 3451</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutUs