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
      <title>Garážové brány</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
        <div className="inner">
          <header className="major">
            <h1>Garážové brány pre domáci sektor</h1>

          </header>
          <p>Na stránke sa pracuje.</p>
          
        </div>
    </div>

  </Layout>
);

export default About;
