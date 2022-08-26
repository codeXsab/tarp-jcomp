import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import instructionsImg from './icons/instructions.png';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const detailedContent = props.detailedContent;
    const instructions = props.instructions;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton={false}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.detailedContent}
                </p>
                <h4>Instructions to use the module <img src={instructionsImg} className="reduce-to-icon"></img></h4>
                <ol>
                    {instructions.map((instructionPoint, idx) =>
                        <li>{instructionPoint}</li>
                    )}
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function LightBoxButton(props) {
    const headingModal = props.heading;
    const detailedContent = props.detailedContent;
    const instructions = props.instructions;

    // console.log(detailedContent);
    // console.log(instructions);

    const [modalShow, setModalShow] = React.useState(false);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 300));
    }

    function LoadingButton() {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            if (isLoading) {
                simulateNetworkRequest().then(() => {
                    setLoading(false);
                });
            }
        }, [isLoading]);

        const handleClick = () => {
            setLoading(true);
            setModalShow(true);
        }

        return (
            <div>
                <Button
                    variant={"warning"}
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                >
                    {isLoading ? 'Loading…' : 'More Information'}
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    heading={headingModal}
                    detailedContent={props.detailedContent}
                    instructions={props.instructions}
                />

            </div>
        );
    }
    return (<LoadingButton />);
}