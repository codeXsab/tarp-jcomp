import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import Background from './Background';
import CustomNavbar from './CustomNavbar.jsx';
import Display from './Display';
import Card from './Card';
import TransitionHeading from './TransitionHeading';
import Section2 from './Section2';
import Technologies from './Technologies';
import FeatureCard from './FeatureCard';
import "animate.css/animate.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const title1 = "Smart Camera using Cutting Edge Technologies";
    const content1 = "Takes the conventional walking stick up a notch by integrating it with properties like Object Detection and Depth Estimation.\nAids visually impaired people to explore their surroundings with ease.";
    const img1 = "object";

    const title2 = "Intelligent Text2Speech Converter";
    const content2 = "Simulates a special device that utilises Optical Character Recognition and Speech Synthesis to facilitate better understanding of visual text.\nMakes visually intensive tasks like reading, a piece of cake."
    const img2 = "ocr";

    const transitionName0 = "Our Mission";
    const transitionName1 = "Features";
    const transitionName2 = "Our Team";
    return (
        <div>
            <div>
                <CustomNavbar />
            </div>
            <div id="home" className="FirstDiv">
                <Display></Display>
                <Background></Background>
            </div>
            <div id="our-mission" className="section-2">
                <Section2 />
            </div>
            <div id="features" className="section-3">

                <TransitionHeading name={transitionName1} className="transition-heading"/>
                <FeatureCard title={title1} content={content1} img={img1} flip={true}></FeatureCard>
                <FeatureCard title={title2} content={content2} img={img2} flip={false}></FeatureCard>
            </div>
            <Technologies></Technologies>
        </div>
    )
}