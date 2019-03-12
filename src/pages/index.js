import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import Layout from '../components/layout'
import Gallery from '../components/gallery'
import Carousel from '../components/Carousel'
import CarouselFeedback from '../components/CarouselFeedback'

import logo_dlhe from '../assets/images/logo_dlhe.png'
import logo from '../assets/images/logo.png'

import aw from '../assets/images/aw.png'
import bft from '../assets/images/bft.png'
import gfa from '../assets/images/gfa.jpg'
import nice from '../assets/images/nice.jpg'
import somfy from '../assets/images/somfy.jpg'
import sommer from '../assets/images/sommer.jpg'

import Layer1 from '../assets/images/Layer 1.png'
import Layer3 from '../assets/images/Layer 3.png'
import Layer4 from '../assets/images/Layer 4.png'
import Layer5 from '../assets/images/Layer 5.png'

import gallery01 from '../assets/images/gallery01.jpg'
import gallery02 from '../assets/images/gallery02.jpg'
import gallery03 from '../assets/images/gallery03.jpg'
import gallery04 from '../assets/images/gallery04.jpg'
import gallery05 from '../assets/images/gallery05.jpg'
import gallery06 from '../assets/images/gallery06.jpg'
import gallery07 from '../assets/images/gallery07.jpg'
import gallery08 from '../assets/images/gallery08.jpg'




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
                            <div className="logo_full">
                            <img src={logo} alt=""/>
                            <img src={logo_dlhe} alt="" />
                            </div>
                            
                            <p>Naša spoločnosť sa zaoberá predajom a montážou vysoko kvalitných a funkčných vstupných brán.
Špičková a praxou preverená technológia povrchových úprav predurčuje naše výrobky na dlhodobé 
a bezproblémové užívanie. Jedinečný estetický dizajn spĺňa nároky najnáročnejších zákazníkov. KEDY STE VZNIKLI, ako dlho sa tomu venujete, kde hlavne  posobite, Napiste nam vase poziadavky a my daco daco</p>
                            <ul className="actions" style={{margin: '0'}}>
                                <li><Link to="/cenova-ponuka" className="button special-2">Napíšte nám</Link></li>
                            </ul>
                        </div>
                       
                        {/*<img src={town} alt="" className="town" />*/}
                        
                    </section>



                    <div className="inner" id="products" style={{borderTopWidth: '0', paddingTop: '3rem'}}>
                    <h2 style={{textAlign: 'center',  padding: "2rem"}}>Naše produkty</h2>
                    
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

                    

                    <section className="inner" >
                    <h2 style={{textAlign: 'center'}}>Pohony s ktorými pracujeme</h2>
                        <div className="box-row">
                        
         
                            <img src={aw} alt="" />
                            <img src={bft} alt="" />
                            <img src={gfa} alt="" />
                            <img src={nice} alt="" />
                            <img src={somfy} alt="" />
                            <img src={sommer} alt="" />
                        
                        </div>
                    </section>

 



                    <section id="gallery" style={{paddingTop: "5rem"}}>
                    <div className="inner gallery" >
                    <h2 >Galéria</h2>
                                           
                           
       
<Gallery full={false} />
<Link to="/galeria" className="button special">celú galériu nájdete tu</Link>
                            
                            </div>
                    </section>
                    
                    <section id="feedback" className="inner" >
        
                        <div className="inner box-row">
                              <CarouselFeedback />
                        </div>
                    </section>

                    <section id="price" className="invert">
                        <div className="inner box-row" style={{padding: '4rem 0'}}>
                                <h2 style={{margin: '0'}}>Kontaktujte nás pre Vašu cenovú ponuku</h2>
                                           
                            <Link to="/cenova-ponuka" className="button special">Kontakt</Link>
                            
                        </div>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex