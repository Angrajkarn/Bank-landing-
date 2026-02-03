import React, { useState } from 'react';
import '../styles/components.css';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: 'var(--radius-full)',
                            background: activeTab === index ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                            color: activeTab === index ? 'white' : 'var(--text-secondary)',
                            fontWeight: '600',
                            border: '1px solid',
                            borderColor: activeTab === index ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                            transition: 'all 0.3s'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'rgba(30, 41, 59, 0.4)' }}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
