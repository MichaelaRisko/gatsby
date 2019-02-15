import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import excelsior from '../assets/images/excelsior.png'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth
        })
    }

    returnNavigation () {
        
    }

    render(){
        let navigation;
     
        
        if(this.state.width > 600){
            navigation =
                <nav className="scroll-navigation">
    
                <Scrollspy items={ ['main'] } currentClassName="is-active" offset={-300}>
                <li>
                    <Scroll type="id" element="main">
                        <a href="#">Introduction</a>
                    </Scroll>
                </li>
   
                
                </Scrollspy>
                <Link to="/about" >o nas</Link>
                <Link to="/about" >kontakt</Link>
                              
            </nav>
        } else {
            navigation =<nav className="scroll-navigation">
            <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;">Menu</a>
           
        </nav>
        }
     
        return(
            <header id="header" className="alt">
            <Link to="/" className="logo"><img src={excelsior} alt="" /></Link>
            {navigation}
            
        </header>
        )

    }

}



Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header


