import React, { useState, useEffect } from 'react';
import AOS from 'aos';

export default function TransitionHeading(props){

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);

    return(
        <div data-aos = "zoom-in" className="transition">
            <h1 className="transition-heading">{props.name}</h1>
        </div>
    )
}