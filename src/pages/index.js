import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic05 from '../assets/images/pic05.jpg'


class HomeIndex extends React.Component {

     
    render() {
        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button ">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                    <div className="inner">
                    
                    <div className="grid-wrapper">

                        <div className="box about col-6">
                            <img src={pic05} alt="" />
                            <div className="">
                                <h4>Miska dev dev </h4>
                                <p>Felis sttis eget. tempus ed um. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                        </div>

                        <div className="box about col-6">
                            <img src={pic05} alt="" />
                            <div className="">
                                <h4>Miska dev dev </h4>
                                <p>Felis sttis eget. tempus ed um. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                        </div>
                       
                        
                    </div>
                    </div>
                    <section id="two" className="invert">
                        <div className="inner">
                                <h2 >Massa libero</h2>
                           
                           
                            <ul className="actions">
                                <li className="special"><Link to="/landing" className="button special">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex