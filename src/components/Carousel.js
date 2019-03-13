import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gallery11 from '../assets/images/gallery11.jpg';
import gallery07 from '../assets/images/gallery07.jpg';
import gallery14 from '../assets/images/gallery14.jpg';
import gallery21 from '../assets/images/gallery21.jpg';
import gallery29 from '../assets/images/gallery29.jpg';
import gallery16 from '../assets/images/gallery16.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const BgImage = ({ url, ...rest }) => (
  <div
    style={{
      minHeight: '75vh',
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
      speed: 3000,
      autoplaySpeed: 3000,
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
          {bannerSlide(gallery21)}
          {bannerSlide(gallery14)}
          {bannerSlide(gallery07)}
          {bannerSlide(gallery21)}
          {bannerSlide(gallery29)}
          {bannerSlide(gallery16)}
          {bannerSlide(gallery11)}
        </Slider>
      </div>

    );
  }
}
