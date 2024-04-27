import React, { useState } from 'react';
import style from './Button.module.css';
import { motion } from 'framer-motion';

const Button = () => {
    const [isActive, setIsActive] = useState(false);

    // Define variants for Framer Motion animation
    const buttonVariant = {
        active: {
            color: '#fff',
            scale: 1.2,
            borderRadius: '0%',
        },
        inactive: {
            scale: 1,
            rotate: 0,
            borderRadius: '50%',

        },
    };

    return (
        <div className={style.container}>
            <motion.div
                className={`${style.button} ${isActive ? style.active : style.inactive}`}
                variants={buttonVariant} // Apply the variants
                animate={isActive ? 'active' : 'inactive'} // Set animation based on isActive state
                onClick={() => setIsActive(!isActive)}
            >
                Click me
            </motion.div>
        </div>
    );
};

export default Button;
