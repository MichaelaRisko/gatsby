import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gallery11 from '../assets/images/gallery/catalog/gallery11.jpg';
import gallery07 from '../assets/images/gallery/catalog/gallery07.jpg';
import gallery14 from '../assets/images/gallery/catalog/gallery14.jpg';
import gallery21 from '../assets/images/gallery/catalog/gallery21.jpg';
import gallery29 from '../assets/images/gallery/catalog/gallery29.jpg';
import img003 from '../assets/images/gallery/003.jpg';
import img013 from '../assets/images/gallery/013.jpg';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const BgImage = ({ url, ...rest }) => (
  <div
    style={{
      minHeight: '70vh',
      maxWidth: '100vw !important',
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    {...rest}
  />
);

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    const bannerSlide = what => (
      <div className="">
        <BgImage url={what} />
        {/*
       <div className="carousel-info">
          <header>
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>A responsive site template designed by HTML5 UP<br />
            and released under the Creative Commons.</p>
            <ul className="actions">
                <li><a href="#one" className="button next scrolly">Get Started</a></li>
            </ul>
          </div>
        </div>

      */}
      </div>
    );
    return (
      <div className="carousel no-padding">
        <Slider {...settings}>
          {bannerSlide(img003)}
          {bannerSlide(gallery21)}
          {bannerSlide(img013)}
          {bannerSlide(gallery14)}
          {bannerSlide(gallery29)}
        </Slider>
      </div>

    );
  }
}
