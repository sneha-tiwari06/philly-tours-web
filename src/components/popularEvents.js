// src/components/EventSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const EventSlider = () => {
  // Sample tour data
  const slides = [
    {
      title: "Philly City Day Tour",
      image: "./images/day-tour.jpg",
      price: "$69.00",
      link: "#",
    },
    {
      title: "Philly City Night Tour",
      image: "./images/Independence-Hall-at-night-in-Philadelphia.webp",
      price: "$69.00",
      link: "#",
    },
    {
      title: "4 Seater Private Tour",
      image: "./images/4seater-tour.avif",
      price: "$69.00",
      link: "#",
    },
    {
      title: "7 Seater Private Tour",
      image: "./images/7seater-tour.jpg",
      price: "$69.00",
      link: "#",
    },
    {
      title: "7 Seater Private Tour",
      image: "./images/7seater-tour.jpg",
      price: "$69.00",
      link: "#",
    },
  ];

  return (
    <section className="w-100 position-relative overflow-hidden padding section-tours">
      <div className="container-lg">
      <div className="sec-title-container d-flex">
            <div className="sec-title mb-0">
              <span className="h6 sec-title__tagline">popular events</span>
              <h2 className="h1 mb-0">
                Featured <span className="text-third">Events</span>
              </h2>
            </div>
            <div className="swiper-controls m-0">
              <div className="swiper-button-prev lg"></div>
              <div className="swiper-button-next lg"></div>
            </div>
          </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
         
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="package-card">
              <div className="package-card__inner">
                <div className="package-card__img">
                  <a href={slide.link}>
                    <img src={slide.image} alt={slide.title} />
                  </a>
                </div>
                <div className="package-card__content">
                  <h3 className="package-card__title">
                    <a href={slide.link}>{slide.title}</a>
                  </h3>
                  <p className="text-truncate_two-lines">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officiis?
                  </p>
                  <div className="package-card__content__btn">
                    <div className="viewmore w-auto mt-0">
                      <a href={slide.link} className="button">
                        View Detail <i className="fa fa-angles-right icon-circular sm"></i>
                      </a>
                    </div>
                    <div className="readmore w-auto mt-0">
                      <a href={slide.link} className="button button-sm stroke">
                        Book Now <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventSlider;
