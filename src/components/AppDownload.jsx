import React from 'react';
import { Smartphone } from 'lucide-react';
import Button from './Button';

const AppDownload = () => {
    return (
        <section style={{ padding: '6rem 0', background: '#0f172a', color: 'white' }}>
            <div className="section-wrapper" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '4rem'
            }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                        Bank on the go with <br />
                        <span style={{ color: '#60A5FA' }}>NovaFin App</span>
                    </h2>
                    <p style={{ color: '#94A3B8', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.6' }}>
                        Manage your accounts, invest in funds, and pay bills from anywhere. Download the highest trusted banking app today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Button variant="outline" style={{ borderColor: '#334155', color: 'white' }}>
                            <span style={{ marginRight: '0.5rem' }}></span> App Store
                        </Button>
                        <Button variant="outline" style={{ borderColor: '#334155', color: 'white' }}>
                            <span style={{ marginRight: '0.5rem' }}>▶</span> Google Play
                        </Button>
                    </div>
                </div>

                <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '1.5rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}>
                        <div style={{
                            width: '240px',
                            height: '240px',
                            background: 'black',
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Fake QR pattern effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `radial-gradient(white 20%, transparent 20%), radial-gradient(white 20%, transparent 20%)`,
                                backgroundSize: '20px 20px',
                                backgroundPosition: '0 0, 10px 10px',
                                opacity: 0.1
                            }} />
                            <span style={{ position: 'relative', zIndex: 1, letterSpacing: '1px' }}>QR Code</span>

                            {/* Corner markers */}
                            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '50px', height: '50px', border: '4px solid white', borderRadius: '8px' }}></div>
                            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '50px', height: '50px', border: '4px solid white', borderRadius: '8px' }}></div>
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '50px', height: '50px', border: '4px solid white', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
