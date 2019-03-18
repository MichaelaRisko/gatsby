import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/logo.png';

const year = () => {
  let thisYear = new Date()
  return thisYear.getFullYear()
}
const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <div>
        <Link to="/" className="logo"><img src={logo} alt="" /></Link>
        <p style={{marginBottom: '1rem'}}>info@transferrum.sk</p>
      </div>
      <div className="footer-reverse">
      <ul className="links">
        <li><Link to="/spracovanie-osobnych-udajov">Spracovanie osobných údajov</Link></li>
        <li><Link to="/cenova-ponuka">Kontakt - Cenová ponuka</Link></li>
        <li><Link to="/galeria">Galéria</Link></li>
      </ul>
        <ul className="copyright">
          <li>Copyright &copy; {year()} <a href="https://transferrum.sk">TRANSFERRUM</a></li>
          <li><a href="https://acsella.sk" target="_blank">Design+Code ACSELLA</a></li>
        </ul>
      </div>
    </div>

  </footer>
);

export default Footer;
