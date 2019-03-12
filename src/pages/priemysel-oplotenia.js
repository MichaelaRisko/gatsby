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
      <title>About - Forty by HTML5 UP</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Oplotenie pozemkov pre priemyselný  sektor</h1>
          </header>
          <span className="image main"><img src={pic11} alt="" /></span>
          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
        </div>
      </section>
      <section id="one" className="tiles">
        <article style={{ backgroundImage: `url(${pic01})` }}>
          <header className="major">
            <h3>Aliquam</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${pic02})` }}>
          <header className="major">
            <h3>Tempus</h3>
            <p>feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${pic03})` }}>
          <header className="major">
            <h3>Magna</h3>
            <p>Lorem etiam nullam</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${pic04})` }}>
          <header className="major">
            <h3>Ipsum</h3>
            <p>Nisl sed aliquam</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${pic05})` }}>
          <header className="major">
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        <article style={{ backgroundImage: `url(${pic06})` }}>
          <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
      </section>
    </div>

  </Layout>
);

export default About;
