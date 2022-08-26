import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import IconCard from './SubComponets/IconCard';

export default function Technologies() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="transition section-2">
            <div>
                <h1 data-aos="zoom-in" className="section-4-heading setPadding">Technologies Used</h1>
            </div>
            <div id = "technologies" className="tech-container">
                <IconCard img="react" techName="ReactJS"></IconCard>
                <IconCard img="html" techName="HTML 5"></IconCard>
                <IconCard img="python" techName="Python"></IconCard>
                <IconCard img="css" techName="CSS 3"></IconCard>
            </div>
        </div>
    )
}