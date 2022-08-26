import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Slider from '@material-ui/core/Slider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import mute from './SubComponets/icons/mute.png';
import volume from './SubComponets/icons/volume.png';
import lightbulb from './SubComponets/icons/lightbulb.png';
import darkbulb from './SubComponets/icons/darkbulb.png';
import idcard from './SubComponets/icons/id-card.png';
import accent from './SubComponets/icons/accent.png';
import languages from './SubComponets/icons/languages.png';


export default function MyForm(props) {


    const [options, setOptions] = useState([]);

    const formName = window.location.pathname.split('/')[2];
    let flag = true;
    if (formName == 'object' || formName == 'depth') {
        flag = true;
    }
    else if (formName == 'ocr' || formName == 'speech') {
        flag = false;
    }



    /****** LOADING BUTTON STATE CONFIGURATION ******/

    const [isLoading, setLoading] = useState(false);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = (e) => {
        setLoading(true);
    }

    // handleClick() function is called in the handleSubmit function

    /************************************************/



    const [checked, setChecked] = useState("");
    let checkRadio = false;

    function handleRadioClick(e) {
        if (e.target.value == 'English') {
            setOptions(["English (Australia)", "English (United Kingdom)", "English (United States)", "English (India)"])
        }
        if (e.target.value == 'Hindi') {
            setOptions(["Hindi (India)"]);
        }

        setChecked(e.target.value);
        checkRadio = true;


    }

    /********** SLIDER STATE CONFIGURATION **********/

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /************************************************/


    /******** SUBMIT CONFIG(BACKEND CONNECT) ********/

    function handleSarthakSubmit(e) {
        e.preventDefault();
        if (e.target[2].value == 'Choose...') {
            alert('Accent must be selected for form submission.');
            return;
        }

        const dummyData = {
            name: e.target[0].value,
            slider: e.target[1].value,
            accent: e.target[2].value,
            flag: 1
        };


        fetch('/script1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dummyData)
        }).then(
            response => response.json()
        ).then(data => console.log(data));


        if (!isLoading) {
            handleClick();
        }
    }

    /************************************************/


    function handleSheffySubmit(e) {
        e.preventDefault();
        if (checked == "") {
            alert('Language must be selected for form submission.')
            return;
        }

        if (e.target[4].value == 'Choose...') {
            alert('Accent must be selected for form submission.');
            return;
        }

        const dummyData = {
            name: e.target[0].value,
            volume: e.target[1].value,
            language: checked,
            accent: e.target[4].value
        };


        fetch('/script2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dummyData)
        }).then(
            response => response.json()
        ).then(data => console.log(data));


        if (!isLoading) {
            handleClick();
        }
    }


    function handleClearResponseClick(e) {
        // name
        document.getElementsByClassName('form-grid-item-2')[0].getElementsByTagName('input')[0].value = null;
        setValue(0);
        document.getElementsByClassName('form-grid-item-6')[0].getElementsByTagName('select')[0].selectedIndex = 0;
    }

    function handleClearResponseClickSheffy(e) {
        // name
        document.getElementsByClassName('form-grid-item-2')[0].getElementsByTagName('input')[0].value = null;
        setValue(0);
        document.getElementsByClassName('form-grid-item-6')[0].getElementsByTagName('select')[0].selectedIndex = 0;
        document.getElementById("engRadioButton").checked = false;
        document.getElementById("hinRadioButton").checked = false;

    }

    if (flag == true) {
        return (

            <div>
                <Form onSubmit={handleSarthakSubmit} className="form-containter-grid">
                    <div className="form-grid-item-1">Let's get started with your name<img
                        src={idcard}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                        style={{ marginLeft: "1.25%", marginBottom: "0.75%" }}
                    /><div>

                        </div></div>
                    <TextField name="username" id="standard-basic" label="Name" required={true} className="form-grid-item-2" />
                    <div className="form-grid-item-3">What brightness level would work for you?</div>

                    <div className="form-grid-item-4">
                        <div>
                            <img
                                src={darkbulb}
                                width="40"
                                height="40"
                                alt="React Bootstrap logo"
                                data-aos="zoom-in"
                                style={{ float: "right" }}
                            />
                        </div>
                        <div className="form-grid-item-4-sub-item-2">
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" marks
                                min={0}
                                max={50}
                                step={5}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div>
                            <img
                                src={lightbulb}
                                width="40"
                                height="40"
                                alt="React Bootstrap logo"
                                data-aos="zoom-in"
                            />
                        </div>
                    </div>

                    <div className="form-grid-item-5">Choose your preferred accent<img
                        src={accent}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                        style={{ marginLeft: "1.35%", marginBottom: "0.50%" }}
                    /></div>
                    <div className="form-grid-item-6">
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Male English</option>
                            <option>Female English</option>
                            <option>Male Hindi</option>
                            <option>Female Hindi</option>
                        </Form.Control>
                    </div>
                    <div className="form-grid-item-7">
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isLoading}
                            className="loading-button"
                        >
                            {isLoading ? 'Loading…' : "Submit"}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleClearResponseClick}
                        >
                            Clear Response
                        </Button>
                    </div>
                </Form>
            </div>

        )
    }
    else {
        return (
            <div>
                <Form onSubmit={handleSheffySubmit} className="form-containter-grid">
                    <div className="form-grid-item-1">Let's get started with your name<img
                        src={idcard}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                        style={{ marginLeft: "1.25%", marginBottom: "0.75%" }}
                    /></div>

                    <TextField name="username" id="standard-basic" label="Name" required={true} className="form-grid-item-2" />


                    <div className="form-grid-item-3">Your volume preference? </div>

                    <div className="form-grid-item-4">
                        <div>
                            <img
                                src={mute}
                                width="30"
                                height="30"
                                alt="React Bootstrap logo"
                                data-aos="zoom-in"
                                style={{ float: "right" }}
                            />
                        </div>
                        <div className="form-grid-item-4-sub-item-2">
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" marks
                                min={0}
                                max={50}
                                step={5}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div>
                            <img
                                src={volume}
                                width="30"
                                height="30"
                                alt="React Bootstrap logo"
                                data-aos="zoom-in"
                            />
                        </div>
                    </div>

                    <div className="form-grid-item-5">What is the language used by the input text?<img
                        src={languages}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                        style={{ marginLeft: "1.35%", marginBottom: "0.50%" }}
                    /></div>

                    <div onChange={handleRadioClick} className="form-grid-item-radio-container" required={true}>
                        <input id="engRadioButton" type="radio" value="English" name="gender" className="form-grid-item-radio-eng" /> <span className="form-grid-item-radio-eng-text">English</span>
                        <span className="form-grid-item-radio-hin-text">Hindi</span><input id="hinRadioButton" type="radio" value="Hindi" name="gender" className="form-grid-item-radio-hin" />
                    </div>

                    <div className="form-grid-item-5">Choose your preferred accent<img
                        src={accent}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                        data-aos="zoom-in"
                        style={{ marginLeft: "1.35%", marginBottom: "0.50%" }}
                    /></div>
                    <div className="form-grid-item-6">
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            {options.map((item) => {
                                return <option>{item}</option>
                            })}
                        </Form.Control>
                    </div>

                    <div className="form-grid-item-7">
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isLoading}
                            className="loading-button"
                        >
                            {isLoading ? 'Loading…' : "Submit"}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleClearResponseClickSheffy}
                        >
                            Clear Response
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}