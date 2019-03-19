import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const About = props => (
  <Layout>
    <Helmet>
      <title>Oplotenie pozemkov</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
      <div className="inner">
        <header className="major">
          <h1>Oplotenie pozemkov pre domáci sektor</h1>
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
