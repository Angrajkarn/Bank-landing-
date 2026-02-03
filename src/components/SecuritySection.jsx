import React from 'react';
import Button from './Button';

const SecuritySection = () => {
    return (
        <section style={{
            background: '#AEEFF0', // Light cyan/teal similar to reference
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden',
            color: '#1e293b'
        }}>
            <div className="section-wrapper" style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap-reverse',
                gap: '4rem'
            }}>
                {/* Right Content (Visually Left in code due to row-reverse, but structurally second) */}
                <div style={{ flex: '1 1 400px', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: '2px solid #000', fontWeight: '800', fontStyle: 'italic' }}>
                            FRAUD PATROL
                        </div>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: '1.2',
                        color: '#1e293b'
                    }}>
                        Let's Make India <br />
                        Fraud Free
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                        marginBottom: '2rem',
                        color: '#334155'
                    }}>
                        Stay Safe, Stay Vigil and Join the Vigil Army
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button style={{
                            background: '#004c8f',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            fontSize: '1.1rem'
                        }}>
                            Know More
                        </Button>
                        <Button style={{
                            background: '#004c8f',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            fontSize: '1.1rem'
                        }}>
                            Chat Now
                        </Button>
                    </div>
                </div>

                {/* Left Image (Visually Right) */}
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="/assets/security_hero.png"
                        alt="Security Vigilance"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto',
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                            borderRadius: '1rem' // Adding slight radius as the generated image is rectangular poster
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
