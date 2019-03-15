import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Gallery from '../components/gallery.js';

const GalleryPage = props => (
  <Layout>
    <Helmet>
      <title>TRANSFERRUM - Galéria produktov</title>
      <meta name="description" content="Galéria - ploty, pohony, garážové brány, oplotenia" />
    </Helmet>

    <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

      <header className="major" style={{ paddingTop: '5rem', margin: '0 auto' }}>
        <h1>Galéria našich produktov</h1>
      </header>
      <Gallery full />
    </div>

  </Layout>
);

export default GalleryPage;
