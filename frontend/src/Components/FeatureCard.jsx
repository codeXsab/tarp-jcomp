import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import walkingStickImg from './images/walking-stick.png';
import textReader from './images/text-reader.png';
import explore from './SubComponets/icons/explore.png'
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

export default function FeatureCard(props) {

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);

    let logo = "";
    if (props.img === "object") {
        logo = walkingStickImg;
    }
    else if (props.img === "ocr") {
        logo = textReader;
    }

    const flip = props.flip;

    if (flip == true) {
        return (

            <div data-aos="zoom-in-up" className="flex-container-card text">

                <Router forceRefresh={true}>
                    <div className="card-flex-item-1">
                        <div className="card-title">{props.title}</div>
                        <div className="card-content">{props.content}</div>
                        <Link to={"/form/" + props.img}>
                            <Button variant="danger" style={{ color: "white" }}>Explore
                            <img
                                    src={explore}
                                    width="20"
                                    height="20"
                                    alt="React Bootstrap logo"
                                    style={{ marginLeft: "7px", marginBottom: "3px" }}
                                />
                            </Button>{' '}
                        </Link>
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
                        <Link to={"/form/" + props.img}>
                            <Button variant="danger">Explore <img
                                src={explore}
                                width="20"
                                height="20"
                                alt="React Bootstrap logo"
                                style={{ marginLeft: "7px", marginBottom: "3px" }}
                            /></Button>
                        </Link>
                    </div>
                </Router>
            </div>
        )
    }
}
