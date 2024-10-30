import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnterPage.css'
import backgroundImage from '../images/lake_como.jpg'

const EnterPage = ({ onNavigate }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='container' style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: isHovered ? "150%" : 'cover'
            }}>
            <span 
                onClick={() => onNavigate('/home')}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                Enter
            </span>
            <p className='author-text'>by Maksims Volokotkins</p>
        </div>
    );
}

export default EnterPage;
