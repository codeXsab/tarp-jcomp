import React, { useState, useEffect } from 'react';
import ProjectLogo from './images/projectLogo.png';
import MyForm from './MyForm';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Card from './Card';
import DownArrow from './SubComponets/icons/down-arrow.png'
import notepad from './SubComponets/icons/notepad.png';

export default function FormPage(props) {

    const title1 = "Object Detection";
    const content1 = "A computer vision technique to identify and locate objects in images and videos, while accurately labeling them";
    const img1 = "object";
    // Modal
    const detailedContent1 = "Object detection is a computer vision technique to identify and locate objects in images and videos, while accurately labeling them.\n In our prototype we’ll be using object detection technique to help visually impaired people recognize objects in front of them, providing precise information about their surrounding.";
    const instructions1 = ["Click on the 'Try It' Button.", "Wait for the camera to open.", "Wait for 2 mins so that scene initialisation takes place.", "Move around to let the camera detect surrounding objects.", "Wait for the readout.", "If two beeps are heard, it implies you are too close to the object."];

    const title2 = "Depth Estimation";
    const content2 = "A set of techniques and algorithms used to obtain the distance of an object in a scene";
    const img2 = "depth";
    // Modal
    const detailedContent2 = "We use depth estimation to calculate the distance between the object and the person and alert them when they come close enough.\n\nWe use basic geometrical aspects of the image to find the live distance between the camera sensor and the object. We then process the distance for a threshold and inform accordingly.\n\nThe live alerts not only help the end-user to locate dangers but also help them get a spatial viewpoint of their location.";
    const instructions2 = ["Click on the 'Try It' Button.", "Wait for the camera to open.", "Wait for 2 mins so that scene initialisation takes place.", "Let the camera detect different objects and measure their distances.", "If the subject moves too close to any object, it produces a beep sound to warn them."];

    const title3 = "Optical Character Recognition (OCR)";
    const content3 = "Process of digitizing a document into its constituent characters";
    const img3 = "ocr";
    // Modal
    const detailedContent3 = "Optical character recognition belongs to the family of technique performing automatic identification. It is defined as the process of digitizing the document into its constituent characters. In this project, when the user scans an image from his/her device OCR converts the text in the image to data which is further converted into speech.";
    const instructions3 = ["Click on the 'Try It' Button", "Point the camera towards the subject", "Move the camera away from the subject", "Wait for the readout"];

    const title4 = "Speech Synthesis";
    const content4 = "Artificial Production of human speech";
    const img4 = "speech";
    // Modal
    const detailedContent4 = "Speech synthesis refers to artificial production of human speech. It can be used in tandem with optical character recognition (OCR) to enable the reading of textual content by the system. Knowledge extraction by listening to sounds is a distinctive property and is a more effective means of communication in the case of people having visual impairment. The interface developed in this project helps these people to observe and receive textual information available in their environment. ";
    const instructions4 = ["Click on the 'Try It' Button", "Object Detection - Wait for the readout once the camera identifies the object", "OCR - Wait for the readout once the camera scans the text"];

    let cards;
    let heading;

    const formName = window.location.pathname.split('/')[2];

    if (formName == 'object' || formName == 'depth') {
        cards = <div>
            <Card title={title1} content={content1} img={img1} flip={false} detailedContent={detailedContent1} instructions={instructions1} />
            <Card title={title2} content={content2} img={img2} flip={true} detailedContent={detailedContent2} instructions={instructions2} />
        </div>
        heading = "Smart Camera using Cutting Edge Technologies";
    }
    else if (formName == 'ocr' || formName == 'speech') {
        cards = <div>
            <Card title={title3} content={content3} img={img3} flip={false} detailedContent={detailedContent3} instructions={instructions3} />
            <Card title={title4} content={content4} img={img4} flip={true} detailedContent={detailedContent4} instructions={instructions4} />
        </div>

        heading = "Intelligent Text2Speech Converter";
    }
    function handleScrollClick() {
        document.getElementById("heading-before-form-scroll").scrollIntoView({ behavior: 'smooth' });
    }

    function handleTopClick() {
        document.getElementById("heading-div-form-page").scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <div>
            <div className="flex-container-my-nav">
                <Link><img
                    src={ProjectLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top my-nav-flex-item-1"
                    alt="React Bootstrap logo"
                    data-aos="zoom-in"
                    onClick={handleTopClick}
                /></Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="my-nav-flex-item-2">Back to Home ↲</h3>
                </Link>
            </div>

            <div><h1 id="heading-div-form-page" className="heading-div-form-page">{heading}</h1></div>


            <div style={{ marginLeft: "12.5%" }}>{cards}</div>
            <Link><div class="arrow bounce" style={{ marginTop: "-1%" }} onClick={handleScrollClick}>
                <img src={DownArrow} width="30" height="30"></img>
            </div></Link>
            <h3 id="heading-before-form-scroll" className="heading-before-form">Fill in a few fields before testing the product <img
                src={notepad}
                width="30"
                height="30"
                alt="React Bootstrap logo"
                data-aos="zoom-in"
                style={{ marginLeft: "1.25%", marginBottom: "0.50%" }}
            /></h3>
            <MyForm></MyForm>
        </div>
    )
}