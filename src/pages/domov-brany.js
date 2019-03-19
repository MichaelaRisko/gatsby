import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

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
