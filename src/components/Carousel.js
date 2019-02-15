import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    const bannerSlide = (what) => (
        <section id="banner" className="major">
        <div className="inner">
            <header>
                <h1>Hi, my name is Forty {what}</h1>
            </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
    )
    return (
        <section id="carousel" className="major">
        <Slider {...settings}>
          <div>
            {bannerSlide("01")}
          </div>
          <div>
            {bannerSlide("02")}
          </div>
          <div>
            {bannerSlide("03")}
         </div>
 
        </Slider>
      </section>
    );
  }
}