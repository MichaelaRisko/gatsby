import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import InputForm from '../components/inputForm'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div>
            <div className="inner" style={{paddingTop: '0'}}>
            <InputForm />
            </div>      
        </div>

    </Layout>
)

export default Landing