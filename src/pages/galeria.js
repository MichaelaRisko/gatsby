import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Gallery from '../components/gallery'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>About - Forty by HTML5 UP</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div style={{    maxWidth: '80rem', margin: '0 auto'}}>
  
                    <header className="major" style={{paddingTop: '5rem', margin: '0 auto'}}>
                        <h1 >Galéria našich produktov</h1>
                    </header>
        <Gallery full={true}/>
        </div>

    </Layout>
)

export default About