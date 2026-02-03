import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CreditCard } from 'lucide-react';
import Button from './Button';
import '../styles/components.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [activeSegment, setActiveSegment] = useState('Personal');

    const segments = ['Personal', 'NRI', 'SME', 'Wholesale', 'Agri'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
            {/* Top Bar */}
            <div style={{
                background: '#020617',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                padding: '0.5rem 0',
                display: scrolled ? 'none' : 'block',
                transition: 'all 0.3s'
            }}>
                <div className="section-wrapper" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', fontSize: '0.8rem' }}>
                    {segments.map(seg => (
                        <button
                            key={seg}
                            onClick={() => setActiveSegment(seg)}
                            style={{
                                color: activeSegment === seg ? 'var(--color-accent)' : 'var(--text-muted)',
                                fontWeight: activeSegment === seg ? '600' : '400',
                                cursor: 'pointer',
                                background: 'transparent',
                                border: 'none'
                            }}
                        >
                            {seg}
                        </button>
                    ))}
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', height: '15px' }} />
                    <button style={{ color: 'var(--text-secondary)' }}>Locate Us</button>
                    <button style={{ color: 'var(--text-secondary)' }}>Help</button>
                </div>
            </div>

            {/* Main Nav */}
            <nav className={`w-full transition-all duration-300 ${scrolled ? 'glass shadow-md py-3' : 'glass py-4'}`}
                style={{
                    transition: 'all 0.3s ease',
                    background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                <div className="section-wrapper flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <div style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))', padding: '0.5rem', borderRadius: '0.5rem' }}>
                            <CreditCard size={24} color="white" />
                        </div>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em' }}>
                            Nova<span className="gradient-text">Fin</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', alignItems: 'center', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--text-primary)',
                                    fontWeight: location.pathname === link.path ? '600' : '500',
                                    fontSize: '0.95rem'
                                }}
                                className="hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/">
                            <Button variant="primary" size="sm" style={{ padding: '0.5rem 1.5rem' }}>
                                Login
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden" style={{ display: window.innerWidth <= 768 ? 'block' : 'none' }}>
                        <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'white' }}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="glass" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        padding: '2rem',
                        flexDirection: 'column',
                        display: 'flex',
                        background: 'var(--bg-secondary)',
                        minHeight: '100vh',
                        gap: '1.5rem'
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {segments.map(seg => (
                                <span key={seg} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{seg}</span>
                            ))}
                        </div>
                        <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Login</Button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
