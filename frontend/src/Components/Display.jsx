import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import logo from './images/face.png';

export default function Display() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const text = "What you need is vision not sight.";
    return (
        <div className="flex-container-title">
            <div data-aos="fade-up" className="title-flex-item-1">Image detection using various <br />Interaction Methods<br /><div className="Introduction">{text}</div></div>
            <img data-aos="fade-down" src={logo} className="title-flex-item-2"></img>
            {/* <div className="Introduction">Items */}
            {/* </div> */}
        </div>
    )
}