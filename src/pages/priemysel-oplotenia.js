import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';
import pic11 from '../assets/images/pic11.jpg';


const About = props => (
  <Layout>
    <Helmet>
      <title>Oplotenie pozemkov</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
        <div className="inner">
          <header className="major">
          <h1>Oplotenie pozemkov pre priemyselný  sektor</h1>
          </header>
          <p>Na stránke sa pracuje.</p>
          <ul>
            <h4>Oplotenie pozemkov systém</h4>
            <li>HOME INCLUSIVE</li>
            <li>MODERN</li>
            <li>LUX</li>
            <li>PREMIUM</li>
            <li>STYLE</li>
            <li>VARIO</li>
            <li>CLASSIC</li>
            <li>BASIC</li>
          </ul>
        </div>
    </div>

  </Layout>
);

export default About;
