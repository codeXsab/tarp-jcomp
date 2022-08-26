import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import flaskImg from './icons/flask.png';
import opencvImg from './icons/opencv.png';
import reactImg from './icons/react.png';
import htmlImg from './icons/html.png';
import cssImg from './icons/css.png';
import pythonImg from './icons/python.png';

export default function IconCard(props) {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    let img;
    if (props.img === 'html') {
        img = htmlImg;
    }
    else if (props.img === 'css') {
        img = cssImg;
    }
    else if (props.img === 'react') {
        img = reactImg;
    }
    else if (props.img === 'python') {
        img = pythonImg;
    }

    return (
        <div className="iconCardDiv">
            <img data-aos="zoom-in" src={img} className = "reduce-to-img"></img>
            <br />
            <h4>{props.techName}</h4>
        </div>
    )
}