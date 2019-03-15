import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Layout from '../components/layout';
import Gallery from '../components/gallery.js';
import Carousel from '../components/Carousel';
import CarouselFeedback from '../components/CarouselFeedback';

import logo_dlhe from '../assets/images/logo_dlhe.png';
import logo from '../assets/images/logo.png';

import aw from '../assets/images/brand/aw.png';
import bft from '../assets/images/brand/bft.png';
import gfa from '../assets/images/brand/gfa.jpg';
import nice from '../assets/images/brand/nice.jpg';
import somfy from '../assets/images/brand/somfy.jpg';
import sommer from '../assets/images/brand/sommer.jpg';

import industry01 from '../assets/images/icons/industry01.png';
import home02 from '../assets/images/icons/home02.png';
import home01 from '../assets/images/icons/home01.png';
import industry02 from '../assets/images/icons/industry02.png';

import gallery01 from '../assets/images/gallery/catalog/gallery01.jpg';
import gallery02 from '../assets/images/gallery/catalog/gallery02.jpg';
import gallery03 from '../assets/images/gallery/catalog/gallery03.jpg';
import gallery04 from '../assets/images/gallery/catalog/gallery04.jpg';
import gallery05 from '../assets/images/gallery/catalog/gallery05.jpg';
import gallery06 from '../assets/images/gallery/catalog/gallery06.jpg';
import gallery07 from '../assets/images/gallery/catalog/gallery07.jpg';
import gallery08 from '../assets/images/gallery/catalog/gallery08.jpg';


class HomeIndex extends React.Component {

  render() {
    return (
      <Layout>
        <Helmet
          title="TRANSFERRUM - BRÁNY | POHONY | PLOTY"
          meta={[
            { name: 'description', content: "oplotenie garážové brány plotové brány roletové výklopné dvojkrídlové závesné zásuvné samonosné kované ploty bránky stĺpy" },
            { name: 'keywords', content: 'transferrum plotové brány oplotenia garážové brány ploty stara lubovna roletové výklopné dvojkrídlové závesné zásuvné samonosné kované ploty bránky stĺpy' },
          ]}
        />
        <Carousel />
        <div>
          <section id="main" className="town">
            <div className="inner" style={{ paddingBottom: '0' }}>
              <div className="logo_full">
                <img src={logo} alt="" />
                <img src={logo_dlhe} alt="" />
              </div>

              <p style={{marginBottom: '0.5rem'}}>
              Firma Transferrum vznikla v roku 1993, postupom času sme sa zamerali na <strong>dodávky a montáž
garážových brán a oplotení</strong>. <br/>Od roku 2003 sme oficiálnym zástupcom firmy Wisniowski Sp. z
o.o. S.K.A. 33-311 Wieloglowy 153, Poľsko na slovenskom trhu.
Z jej produkcie dodávame a montujeme pre súkromný a priemyselný sektor:
              </p>
              <ul className="product-list"><strong>Garážové brány</strong>
                  <li>Sekčné</li>
                  <li>Roletové</li>
                  <li>Výklopné</li>
                  <li>Dvojkrídlové</li>
                  <li>Závesné</li>
              </ul>
              <ul className="product-list"><strong>Plotové brány</strong>
                  <li>Zásuvné samonosné</li>
                  <li>Zásuvné</li>
                  <li>Dvojkrídlové</li>
                  <li>Dvojkrídlové skladacie</li>
              </ul>
              <ul className="product-list"><strong>Oplotenie</strong>
                  <li>Priemyselné segmenty</li>
                  <li>Kované ploty</li>
                  <li>Plotové segmenty</li>
                  <li>Bránky</li>
                  <li>Stĺpy</li>
                  <li>Príslušenstvo</li>
              </ul>
              <p style={{marginBottom: '0.5rem'}}>Automatizácia a pohony značky AW, BFT, GFA, Nice, Came, Somfy, Sommer.<br/>Ďalej ponúkame predaj a montáž závor.</p>
              <p>
Záručný a pozáručný servis výrobkov AW – poradenstvo.<br/>
Sme držiteľom oprávnenia na montáž a servis zvisle posuvných brán podľa vyhlášky 508/2009
– skupina BF.</p>
              <ul className="actions" style={{ margin: '0' }}>
                <li><Link to="/cenova-ponuka" className="button special-2">Napíšte nám</Link></li>
              </ul>
            </div>
          </section>

          <div className="inner" id="products" style={{ borderTopWidth: '0', paddingTop: '3rem' }}>
            <h2 style={{ textAlign: 'center', padding: '2rem' }}>Naše produkty</h2>

            <div className="grid-wrapper">

              <div className=" about col-6">
                <Link to="/oplotenia-domov">
                  <img src={home02} alt="" />
                  <div className="">
                    <h4>
Oplotenie pozemkov
                      <br />
pre domáci sektor
                    </h4>
                    <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                  </div>
                </Link>
              </div>

              <div className=" about col-6">
                <Link to="/domov-brany">
                  <img src={home01} alt="" />
                  <div className="">
                    <h4>
Garážové brány
                      <br />
pre domáci sektor
                      {' '}
                    </h4>
                    <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                  </div>
                </Link>
              </div>

              <div className=" about col-6">
                <Link to="/priemysel-oplotenia">
                  <img src={industry02} alt="" />
                  <div className="">
                    <h4>
Oplotenie pozemkov
                      <br />
pre priemyselný  sektor
                    </h4>
                    <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                  </div>
                </Link>
              </div>

              <div className=" about col-6">
                <Link to="/priemysel-brany">
                  <img src={industry01} alt="" />
                  <div className="">
                    <h4>
Garážové brány
                      <br />
pre priemyselný  sektor
                    </h4>
                    <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <section className="inner">
            <h2 style={{ textAlign: 'center' }}>Pohony s ktorými pracujeme</h2>
            <div className="box-row">


              <img src={aw} alt="" />
              <img src={bft} alt="" />
              <img src={gfa} alt="" />
              <img src={nice} alt="" />
              <img src={somfy} alt="" />
              <img src={sommer} alt="" />

            </div>
          </section>

          <section id="gallery" style={{ paddingTop: '5rem' }}>
            <div className="inner gallery">
              <h2>Galéria</h2>
              <Gallery full={false} />
              <Link to="/galeria" className="button special">celú galériu nájdete tu</Link>
            </div>
          </section>

          <section id="feedback" className="inner">
            <div className="inner box-row">
              <CarouselFeedback />
            </div>
          </section>

          <section id="price" className="invert">
            <div className="inner box-row" style={{ padding: '4rem 0' }}>
              <h2 style={{ margin: '0' }}>Kontaktujte nás pre Vašu cenovú ponuku</h2>
              <Link to="/cenova-ponuka" className="button special">Kontakt</Link>

            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
