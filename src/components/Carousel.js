import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import hallinclusive from '../assets/images/hallinclusive.jpg'
import homeinclusive from '../assets/images/Homeinclusive20.jpg'

const BgImage = ({ url, ...rest }) => (
  <div
    style={{
      width: "100%",
      minHeight: "90vh",
      backgroundImage: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
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

      useCSS: true
    };

    const bannerSlide = (what) => (
      <div className="">
        <BgImage url={what === "home" ? homeinclusive : hallinclusive} />
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
      )
    return (
      <div className="carousel">
        <Slider {...settings}>
          
          {bannerSlide("hall")}
          {bannerSlide("home")}
      
 
        </Slider>
      </div>
        
    );
  }
}