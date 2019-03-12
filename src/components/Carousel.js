import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import gallery03 from '../assets/images/gallery03.jpg';
import gallery04 from '../assets/images/gallery04.jpg';
import gallery05 from '../assets/images/gallery05.jpg';
import gallery07 from '../assets/images/gallery07.jpg';
import gallery09 from '../assets/images/gallery09.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery15 from '../assets/images/gallery15.jpg';
import gallery16 from '../assets/images/gallery16.jpg';
import gallery21 from '../assets/images/gallery21.jpg';
import gallery29 from '../assets/images/gallery29.jpg';

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
      speed: 2500,
      autoplaySpeed: 15000,
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


          {bannerSlide(gallery03)}
          {bannerSlide(gallery04)}
          {bannerSlide(gallery05)}
          {bannerSlide(gallery07)}
          {bannerSlide(gallery09)}
          {bannerSlide(gallery13)}
          {bannerSlide(gallery15)}
          {bannerSlide(gallery16)}
          {bannerSlide(gallery21)}
          {bannerSlide(gallery29)}


        </Slider>
      </div>

    );
  }
}
