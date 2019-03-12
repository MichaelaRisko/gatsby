import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import feedback1 from '../assets/images/feedback1.png';
import calendula from '../assets/images/calendula.jpg';


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

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 3500,
      autoplaySpeed: 1500,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="carousel">
        <h2 style={{ textAlign: 'center' }}>Naši spokojní zákazníci</h2>
        <Slider {...settings}>
          <div>
            <img src={feedback1} style={{ height: '4.5rem', padding: '0.75rem 0', margin: '0 auto' }} />
          </div>
          <div>
            <img src={calendula} style={{ height: '4.5rem', margin: '0 auto' }} />
          </div>
          <div>
            <img src={feedback1} style={{ height: '4.5rem', padding: '0.75rem 0', margin: '0 auto' }} />
          </div>
          <div>
            <img src={calendula} style={{ height: '4.5rem', margin: '0 auto' }} />
          </div>
          <div>
            <img src={feedback1} style={{ height: '4.5rem', padding: '0.75rem 0', margin: '0 auto' }} />
          </div>
          <div>
            <img src={calendula} style={{ height: '4.5rem', margin: '0 auto' }} />
          </div>
          <div>
            <img src={feedback1} style={{ height: '4.5rem', padding: '0.75rem 0', margin: '0 auto' }} />
          </div>
          <div>
            <img src={calendula} style={{ height: '4.5rem', margin: '0 auto' }} />
          </div>
        </Slider>
      </div>
    );
  }
}
