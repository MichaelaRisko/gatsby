import React from 'react'
import { Link } from 'gatsby'

import excelsior from '../assets/images/excelsior.png'


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
    <div>
    <Link to="/" className="logo"><img src={excelsior} alt="" /></Link>
                <p>hi@excelsior.com</p>
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
                <li>Copyright &copy; EXCELSIOR</li><li><a href="https://html5up.net">Design+Code</a></li>
            </ul>
    </div>
    </div>  
            
    </footer>
)

export default Footer
