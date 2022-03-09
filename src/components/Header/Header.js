import React, { Component } from 'react';
import logo from '../image/Screenshot from 2022-03-08 08-01-02.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    showMenu(){
        document.querySelector('.menu').style.display = 'block'
        document.querySelector('.menu').classList.add('showMenu')
    }
    close(){
        document.querySelector('.menu').style.display = 'none'
    }
    render() {
        return (
            <div className='header'>
                <div className="logo">
                    <img src={logo} alt="" />    
                </div>
                <div className="menu">
                    <li><a className='animationBorder' href="#">Platform.</a></li>
                    <li><a className='animationBorder' href="#">Solutions.</a></li>
                    <li><a className='animationBorder' href="#">Resources.</a></li>
                    <li><a className='animationBorder' href="#">Pricing.</a></li> 
                    <div className="authInMobile">
                        <a href="#" className='animationBorder'>Log in</a>    
                        <a href="#" className="animationBorder" >Get started</a> 
                    </div>   
                    <FontAwesomeIcon onClick={this.close} className="close" icon={faTimes} />
                </div>
                <div className="auth">
                    <button className='animationBorder'>Log in</button>    
                    <button className="activeAuth" >Get started</button>    
                </div>
                <div className="bars">
                    <FontAwesomeIcon onClick={this.showMenu} className='bar' icon={faBars} />
                </div>
            </div>
        );
    }
}

export default Header;