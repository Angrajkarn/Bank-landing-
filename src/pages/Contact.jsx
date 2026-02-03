import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handeSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div style={{ padding: '8rem 0 4rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="section-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', width: '100%' }}>

                {/* Left: Info */}
                <div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '500px' }}>
                        Have questions about our products or need support? Our team is here to help you 24/7.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '1rem', color: 'var(--color-accent)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem' }}>Phone</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>+91 1800-123-4567</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Mon-Sat 9am to 6pm</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '1rem', color: 'var(--color-accent)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem' }}>Email</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>support@novafin.com</p>
                                <p style={{ color: 'var(--text-secondary)' }}>business@novafin.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '1rem', color: 'var(--color-accent)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem' }}>Headquarters</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>NovaFin Tower, Cyber City</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Gurugram, Haryana, 122002</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Card className="glass-card" style={{ width: '100%', padding: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Send us a message</h2>
                        <form onSubmit={handeSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <Input label="Full Name" placeholder="John Doe" required />
                                <Input label="Email" type="email" placeholder="john@example.com" required />
                            </div>
                            <Input label="Subject" placeholder="How can we help?" required />
                            <Input label="Message" type="textarea" placeholder="Tell us more about your inquiry..." required />

                            <Button fullWidth variant="cta" size="lg" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending Message...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </Button>
                        </form>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Contact;
