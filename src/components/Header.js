import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import logo from '../assets/images/logo.png'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            color: "",
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.handleScroll();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
      }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth
        })
    }

    handleScroll () {
        if (window.scrollY > 400) {
            this.setState({color: 'black'})
          } else {
            this.setState({color: 'white'})
          }
    }

    render(){
        let navigation;
        
        if(this.state.width > 780){
            navigation =
                <nav className="scroll-navigation">
    
                <Scrollspy items={ ['main'] } currentClassName="is-active" offset={-300}>
                <li>
                    <Scroll type="id" element="main">
                        <a href="#">O nas</a>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="products">
                        <a href="#">produkty</a>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="feedback">
                        <a href="#">referencie</a>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="price">
                        <a href="#">cenova ponuka</a>
                    </Scroll>
                </li>
   
                
                </Scrollspy>
                              
            </nav>
        } else {
            navigation =<nav className="scroll-navigation">
            <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;">Menu</a>
           
        </nav>
        }
     // opravit header podla toho ake fotky pojdu 
        return(
            <header id="header" className={this.state.color === "white" ? "alt" : null}>
            <Link to="/" className="logo"><img src={logo} alt="" /></Link>
            {navigation}
            
        </header>
        )

    }

}



Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header


