import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import objectImg from './images/object.png';
import ocrImg from './images/ocr.png';
import speechImg from './images/speech.png';
import depthImg from './images/depth.png';
import LoadingButton from './SubComponets/LoadingButton';
import LightBoxButton from './SubComponets/LightboxButton';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

function Card(props) {

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);

    let logo = "";
    if (props.img === "object") {
        logo = objectImg;
    }
    else if (props.img === "ocr") {
        logo = ocrImg;
    }
    else if (props.img === "speech") {
        logo = speechImg;
    }
    else if (props.img === "depth") {
        logo = depthImg;
    }

    const flip = props.flip;



    if (flip == true) {
        return (
            <div data-aos="zoom-in-up" className="flex-container-card text">
                <Router forceRefresh={true}>
                    <div className="card-flex-item-1">
                        <div className="card-title">{props.title}</div>
                        <div className="card-content">{props.content}</div>
                        <Link to={"/form/" + props.img}></Link>
                        <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
                    </div>
                    <img src={logo} className="card-flex-item-2"></img>
                </Router>
            </div>
        )
    }
    else {
        return (
            <div data-aos="zoom-in-down" className="flex-container-card text" >
                <Router forceRefresh={true}>
                    <img src={logo} className="card-flex-item-2"></img>
                    <div className="card-flex-item-1">
                        <div className="card-title">{props.title}</div>
                        <div className="card-content">{props.content}</div>
                        <Link to={"/form/" + props.img}></Link>
                        <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default withRouter(Card);