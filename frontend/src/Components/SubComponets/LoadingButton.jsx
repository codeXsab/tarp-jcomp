import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import rightArrow from './icons/right-arrow.png';

export default function LoadingButton(props) {
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

        const handleClick = () => setLoading(true);

        return (
            <Button
                variant={props.variant}
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                className="loading-button"
            >
                {isLoading ? 'Loading…' : props.content}
            </Button>
        );
    }

    return(<LoadingButton />);
}