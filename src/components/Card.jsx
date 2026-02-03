import React from 'react';
import '../styles/components.css';

const Card = ({ children, className = '', hoverEffect = false, style = {}, ...props }) => {
    return (
        <div
            className={`glass-card ${className}`}
            style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                ...(hoverEffect ? { cursor: 'pointer', ':hover': { transform: 'translateY(-5px)' } } : {}),
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
