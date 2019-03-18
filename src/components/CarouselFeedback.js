import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import customer01 from '../assets/images/customers/01.jpg';
import customer02 from '../assets/images/customers/02.jpg';
import customer03 from '../assets/images/customers/03.jpg';
import customer04 from '../assets/images/customers/04.jpg';
import customer05 from '../assets/images/customers/05.jpg';
import customer06 from '../assets/images/customers/06.jpg';
import customer07 from '../assets/images/customers/07.jpg';
import customer08 from '../assets/images/customers/08.jpg';
import customer09 from '../assets/images/customers/09.jpg';
import customer10 from '../assets/images/customers/10.jpg';
import customer11 from '../assets/images/customers/11.jpg';
import customer12 from '../assets/images/customers/12.jpg';
import customer13 from '../assets/images/customers/13.jpg';
import customer14 from '../assets/images/customers/14.jpg';

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
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }

  num2(){
    if(this.state.width < 1000) {
      return 4
    }
    if(this.state.width < 500) {
      return 3
    }
    if(this.state.width < 400) {
      return 2
    }
    return 5
  }


  render() {
    let num = 4;
    if(this.state.width < 900) {
      num = 3
    }
    if(this.state.width < 600) {
      num = 2
    }
    if(this.state.width < 450) {
      num = 1
    }
    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: num,
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
            <img src={customer01}/>
          </div>
          <div>
            <img src={customer14}/>
          </div>
          <div>
            <img src={customer03}/>
          </div>
          <div>
            <img src={customer10}/>
          </div>
          <div>
            <img src={customer05}/>
          </div>
          <div>
            <img src={customer12}/>
          </div>
          <div>
            <img src={customer07}/>
          </div>
          <div>
            <img src={customer11}/>
          </div>
          <div>
            <img src={customer06}/>
          </div>
          <div>
            <img src={customer13}/>
          </div>
          <div>
            <img src={customer04}/>
          </div>
          <div>
            <img src={customer08}/>
          </div>
          <div>
            <img src={customer02}/>
          </div>
          <div>
            <img src={customer09}/>
          </div>
        </Slider>
      </div>
    );
  }
}
