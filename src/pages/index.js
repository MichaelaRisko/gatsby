import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import Layout from '../components/layout'
import Carousel from '../components/Carousel'
import CarouselFeedback from '../components/CarouselFeedback'

import logo_dlhe from '../assets/images/logo_dlhe.png'
import Layer1 from '../assets/images/Layer 1.png'
import Layer3 from '../assets/images/Layer 3.png'
import Layer4 from '../assets/images/Layer 4.png'
import Layer5 from '../assets/images/Layer 5.png'



class HomeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percentage: 1
        }
        this.increase = this.increase.bind(this);
      }
    
    increase(){
        this.setState({ percentage: this.state.percentage + 1 });
        
    }
     
    render() {
        if(this.state.percentage < 60){
            setTimeout(this.increase, 100);
        }
           

        const percentage = this.state.percentage || 0;
        console.log(this.state.percentage);
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

                <Carousel />

                <div >
                    <section id="main" className="town">
                        <div className="inner" style={{paddingBottom: '0'}}>
                            <img src={logo_dlhe} alt="" style={{maxHeight: '3rem', paddingBottom: '1.5rem'}}/>
                            <p>nasa spolocnost blabla Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus. Napiste nam vase poziadavky a my daco daco</p>
                            <ul className="actions" style={{margin: '0'}}>
                                <li><Link to="/cenova-ponuka" className="button special-2">napiste nam</Link></li>
                            </ul>
                        </div>
                       
                        {/*<img src={town} alt="" className="town" />*/}
                        
                    </section>



                    <div className="inner" id="products" style={{borderTopWidth: '0', paddingTop: '3rem'}}>
                    
                    <div className="grid-wrapper">
                    
                        <div className=" about col-6">
                        <Link to="/oplotenia-domov">
                            <img src={Layer3} alt="" />
                            <div className="">
                                <h4>Oplotenie pozemkov <br/>pre domáci sektor</h4>
                                <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                            </Link>
                        </div>
                        
                        <div className=" about col-6">
                        <Link to="/domov-brany">
                            <img src={Layer4} alt="" />
                            <div className="">
                                <h4>Garážové brány <br/>pre domáci sektor</h4>
                                <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                            </Link></div>

                        <div className=" about col-6">
                        <Link to="/priemysel-oplotenia">
                            <img src={Layer5} alt="" />
                            <div className="">
                            <h4>Oplotenie pozemkov <br/>pre priemyselný  sektor</h4>
                                <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                            </Link></div>

                        <div className=" about col-6">
                        <Link to="/priemysel-brany">
                            <img src={Layer1} alt="" />
                            <div className="">
                                <h4>Garážové brány <br/>pre priemyselný  sektor</h4>                              
                                <p>Felis sttis eget. tempus ed um. Bland iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                            </div>    
                            </Link></div>
                       
                        
                    </div>
                    </div>

                    <section id="feedback" >
                        <div className="inner box-row">
                           
                            <section className="circle">
                           <CircularProgressbar
                            percentage={percentage-24}
                            text={"2559"}
                            styles={{
                                path: { stroke: `#66C6E3` },
                                text: { fill: '#31353D', fontSize: '1.4rem' },
                              }}
                            />
                            <p>metrov plotov <br/> sme postavili</p>
                           </section>
                           <section className="circle">
                           <CircularProgressbar
                            percentage={percentage-8}
                            text={"217"}
                            styles={{
                                path: { stroke: `#66C6E3` },
                                text: { fill: '#31353D', fontSize: '1.4rem' },
                              }}
                            />
                            <p>bran sme <br/> instalovali</p>
                           </section>
                           <section className="circle">
                           <CircularProgressbar
                            percentage={percentage}
                            text={"814"}
                            styles={{
                                path: { stroke: `#66C6E3` },
                                text: { fill: '#31353D', fontSize: '1.4rem' },
                              }}
                            />
                            <p>spokojnych <br/> zakaznikov</p>
                           </section>
                        </div>
                        <div className="inner box-row">
                              <CarouselFeedback />
                        </div>
                    </section>
                    


                    <section id="price" className="invert">
                        <div className="inner box-row" style={{padding: '4rem 0'}}>
                                <h2 style={{margin: '0'}}>Kontaktujte nas pre vasu cenovu ponuku</h2>
                                           
                            <Link to="/cenova-ponuka" className="button special">Kontakt</Link>
                            
                        </div>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex