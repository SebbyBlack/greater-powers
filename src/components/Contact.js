import React, { Component } from 'react';

import darkstarLogoTrans from "../assets/darkstarLogoTrans.png"

import './Contact.css';

import bar from '../assets/bar.png';
import barSeparator from '../assets/bar_separator_mid.png';

class Contact extends Component {
    componentDidMount() {
        this.props.changeNavImg('default');
    }

    render() {
        return (
            <div className="contact-section">
                <div className="barSection">
                    {/* <NavBar /> */}
                    <div className="bar">
                    {/* <img src={ bar } /> */}
                    </div>
                </div>
    
                <div className="darkstarLogo">
                    
                    <img className="dkLogo" src= {darkstarLogoTrans} />
    
                    
                </div>
    
                {/* <div>
                    <img className="separator" src={ barSeparator } />
                </div> */}
    
                <div className="darkstarText">
                    <h2> A DARKSTAR DEVELOPMENT CORPORATION GAME</h2>
                    <p> 
                        For more information, please don't hesitate
                        to send us a message using this form.
                    </p>
                </div>
    
                <div className="contactForm">
                    <form action="https://formspree.io/fjord.christian@gmail.com" method="POST">
                        <div className="inputBox">
                        <label>Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="Name"
                            placeholder="Your Name.."/>
                        </div>
    
                        <div className="inputBox">
                        <label>Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="_replyto"
                            placeholder="Your Email.."/>
                        </div>
    
                        <div className="inputBox messageBox">
                        <label>Message</label>
                        <textarea 
                            type="message"
                            id="message"
                            name="message"
                            placeholder="Your Message.."/>
                        </div>
    
                        <div className="inputBox submitButton">
                        <input type="submit"value="Send"/>
                        </div>
                    </form>
                </div>
    
                
    
                <div className="barSectionBottom">
                    {/* <NavBar /> */}
                    <div className="bar">
                    <img src={ bar } />
                    </div>
                </div>
    
                
            </div>
        )
    }
}

export default Contact;
