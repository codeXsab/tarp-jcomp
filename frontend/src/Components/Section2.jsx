import React, { useState, useEffect } from 'react';
import AOS from 'aos';

export default function Section2() {


    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div>
            <div className="transition">
                <h1 data-aos="zoom-in" className="section-2-heading">Our Mission</h1>
            </div>
            <div className="section-2-content">
                <p data-aos="fade-right">
                    "Existing devices for visually impaired people prove to be ineffective in providing them with audio cues of their surroundings"
            </p>
                <p data-aos="fade-left">
                    This project aims to take the conventional walking stick up a notch by enabling it with features like object detection and depth estimation. Though the final product assumes the integration of Raspberry Pi and a wireless camera with the walking stick, this website demonstrates how these features would come about in the final product.
                    It further simulates a special device that utilises Optical Character Recognition and Speech Synthesis to facilitate a better understanding of visual text.
            </p>
            </div>
        </div>
    )
}