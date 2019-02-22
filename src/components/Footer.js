import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png'


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
    <div>
    <Link to="/" className="logo"><img src={logo} alt="" /></Link>
                <p>info@transferrum.com</p>
    </div>
    <div className="footer-reverse">
        <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>Copyright &copy; logo</li><li><a href="https://html5up.net">Design+Code</a></li>
            </ul>
    </div>
    </div>  
            
    </footer>
)

export default Footer
