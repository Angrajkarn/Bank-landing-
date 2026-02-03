import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import '../styles/components.css';

const Footer = () => {
    return (
        <footer style={{ background: '#020617', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', fontSize: '0.9rem' }}>
            <div className="section-wrapper">

                {/* Top Section: Links Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                    {/* Column 1 */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>Personal Banking</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#" className="hover:text-white">Savings Account</a></li>
                            <li><a href="#" className="hover:text-white">Salary Account</a></li>
                            <li><a href="#" className="hover:text-white">Fixed Deposits</a></li>
                            <li><a href="#" className="hover:text-white">Home Loans</a></li>
                            <li><a href="#" className="hover:text-white">Personal Loans</a></li>
                            <li><a href="#" className="hover:text-white">Credit Cards</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>Business & SME</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#" className="hover:text-white">Current Account</a></li>
                            <li><a href="#" className="hover:text-white">Trade Finance</a></li>
                            <li><a href="#" className="hover:text-white">Working Capital</a></li>
                            <li><a href="#" className="hover:text-white">POS Solutions</a></li>
                            <li><a href="#" className="hover:text-white">Corporate Cards</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>Calculators</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#" className="hover:text-white">EMI Calculator</a></li>
                            <li><a href="#" className="hover:text-white">FD Calculator</a></li>
                            <li><a href="#" className="hover:text-white">RD Calculator</a></li>
                            <li><a href="#" className="hover:text-white">SIP Calculator</a></li>
                            <li><a href="#" className="hover:text-white">Eligibility Check</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>Regulatory</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                            <li><a href="#" className="hover:text-white">RBI Guidelines</a></li>
                            <li><a href="#" className="hover:text-white">Policies & Codes</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Cyber Security</a></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>Get in Touch</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Phone size={16} /> <span>1800 123 4567</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Mail size={16} /> <span>support@novafin.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <MapPin size={16} style={{ marginTop: '0.25rem', flexShrink: 0 }} /> <span>Registered Office: Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social & Bottom */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
                        <a href="#" className="hover:text-accent"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-accent"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-accent"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-accent"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-accent"><Youtube size={20} /></a>
                    </div>
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', maxWidth: '800px' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            IMPORTANT: NovaFin never asks for your User ID/Password/PIN/OTP through phone call/SMS/Email. Please do not share such details with anyone.
                        </p>
                        <p>
                            &copy; 2026 NovaFin Bank Ltd. All rights reserved. Licensed by RBI.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
