import React, { useState, useEffect } from 'react';
import '../Css/Loader.css'; // Import the CSS file for loader styles
import logo from "../Images/logo/Kreeze Design Studio.png";
import { Fade } from 'react-reveal';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Set loading to false after 2 seconds for fade out
        return () => clearTimeout(fadeInTimer);
    }, []);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setLoading(null); // Set loading to null after another 2 seconds for fade in
        }, 4000); // Set loading to null after 2 seconds for fade in
        return () => clearTimeout(fadeOutTimer);
    }, []);

    return (
        <>
                <div className="loader">
                    <img src={logo} alt="Loading..." />
                </div>
        </>
    );
}

export default Loader;
