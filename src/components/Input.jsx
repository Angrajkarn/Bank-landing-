import React from 'react';
import '../styles/components.css';

const Input = ({ label, type = 'text', className = '', style, ...props }) => {

    const baseStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(30, 41, 59, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
        ...(style || {})
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = 'var(--color-accent)';
        e.target.style.background = 'rgba(30, 41, 59, 0.9)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        e.target.style.background = 'rgba(30, 41, 59, 0.6)';
    };

    // Extract margin for container if present, to avoid double margin
    const containerStyle = {
        width: '100%',
        marginBottom: style?.marginBottom || '1.5rem'
    };

    return (
        <div className="input-group" style={containerStyle}>
            {label && <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{label}</label>}
            {type === 'textarea' ? (
                <textarea
                    className={`input-field ${className}`}
                    style={{ ...baseStyle, minHeight: '120px', resize: 'vertical' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    className={`input-field ${className}`}
                    style={baseStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />
            )}

            {/* Placeholder Style Injection */}
            <style>
                {`
                    ::placeholder {
                        color: #94a3b8 !important;
                        opacity: 1;
                    }
                    :-ms-input-placeholder {
                        color: #94a3b8 !important;
                    }
                    ::-ms-input-placeholder {
                        color: #94a3b8 !important;
                    }
                `}
            </style>
        </div>
    );
};

export default Input;
