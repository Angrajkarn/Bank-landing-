import React from 'react';
import '../styles/components.css';

const QuickAction = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="quick-action-card"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
                minHeight: '120px',
                color: 'var(--text-primary)'
            }}
        >
            <div
                style={{
                    color: 'var(--color-accent)',
                    marginBottom: '0.75rem',
                    padding: '0.75rem',
                    background: 'rgba(44, 116, 179, 0.1)',
                    borderRadius: '50%',
                    transition: 'all 0.2s'
                }}
                className="quick-action-icon"
            >
                {icon}
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: '500', textAlign: 'center' }}>{label}</span>
        </button>
    );
};

export default QuickAction;
