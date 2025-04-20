import React from 'react'
import PackageSlider from './toursPackage'
import AboutUs from './aboutPhillyCity'
import BrandSlider from './brandTrust'
import EventSlider from './popularEvents'
import SpecialOffer from './specialOffers'
import ItinerarySlider from './itinerary'
import BookingForm from './bookingForm'

function HomePage() {
  return (
    <main>
        <div className="section-hero position-relative w-100">
            <div className="swiper hero-slider h-100">
                <div className="swiper-wrapper h-100">
                    <div className="swiper-slide hero-slide h-100">
                        <picture>
                            <source media="(min-width: )" srcset="" />
                            <img src="./images/slide2.webp" className="h-100 object-cover" alt="" />
                        </picture>
                        <div className="hero-text-wrapper">
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        <h4 className="tl-header-banner-sub-title">With vintage luxury cart</h4>
                                        <h1 className="tl-header-banner-title">Explore The Philly City with <span>phillycitytours</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingForm />
           
        </div>
         <PackageSlider />
         <AboutUs />
         <BrandSlider />
         <EventSlider />
         <SpecialOffer />
         <ItinerarySlider />
    </main>
   
   
  )
}

export default HomePage