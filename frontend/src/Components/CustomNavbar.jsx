import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Navbar';
import ProjectLogo from './images/projectLogo.png';
import { Link, animateScroll as scroll } from "react-scroll";


export default function CustomNavbar() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className="nav-wrapper">
            <Navbar bg="dark" className="custom-nav">
                <Navbar.Brand href="#home" className="custom-navbar-items">
                    <img
                        src={ProjectLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#our-mission">
                    <div className="custom-navbar-items" data-aos="zoom-in">Our Mission</div>
                </Navbar.Brand>
                <Navbar.Brand href="#features">
                    <div className="custom-navbar-items" data-aos="zoom-in">Features</div>
                </Navbar.Brand>
                <Navbar.Brand href="#technologies" className="our-team">
                    <div className="custom-navbar-items our-team" data-aos="zoom-in">Technologies Used</div>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}