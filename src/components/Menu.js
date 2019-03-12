import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li><Link onClick={props.onToggleMenu} to="/">Domov</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/cenova-ponuka">Cenova ponuka</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/galeria">Galeria</Link></li>

      </ul>

    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
