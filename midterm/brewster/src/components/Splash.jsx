import React, { useState, useEffect } from 'react'
import '../styles/app.css'
import { motion } from 'framer-motion'

export default function Splash() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []); // run effect on mount (empty dependency array)

    return (
        <motion.div className = {`splash ${fadeOut ? 'fade-out' : ''}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <img src = {logo} alt="logo" />
            <p> grinding fresh coffee beans... </p>
        </motion.div>
    );
}