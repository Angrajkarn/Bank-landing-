import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [passwords, setPasswords] = useState({ password: '', confirm: '' });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (passwords.password !== passwords.confirm) {
            setError("Passwords do not match");
            return;
        }

        if (passwords.password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setIsLoading(true);
        // Simulate API
        setTimeout(() => {
            setIsLoading(false);
            alert("Account Created Successfully! Redirecting to login...");
            window.location.href = '/';
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '8rem 2rem 4rem',
            background: 'radial-gradient(circle at 50% 30%, rgba(44, 116, 179, 0.15) 0%, rgba(2, 6, 23, 0) 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Card className="glass-card" style={{ width: '100%', maxWidth: '500px', padding: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Create Account</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Join the digital banking revolution</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Input label="Full Name" placeholder="Enter your full name" required />
                    <Input label="Email Address" type="email" placeholder="john@example.com" required />
                    <Input label="Mobile Number" type="tel" placeholder="+91 98765 43210" required />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Create password"
                            style={{ marginBottom: 0 }}
                            onChange={(e) => setPasswords({ ...passwords, password: e.target.value })}
                            required
                        />
                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm password"
                            style={{ marginBottom: 0 }}
                            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                            required
                        />
                    </div>

                    {error && <div style={{ color: '#EF4444', marginBottom: '1rem', fontSize: '0.9rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>{error}</div>}

                    <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <input type="checkbox" id="terms" style={{ accentColor: 'var(--color-accent)' }} required />
                        <label htmlFor="terms" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            I agree to the <a href="#" style={{ color: 'var(--color-accent)' }}>Terms & Conditions</a>
                        </label>
                    </div>

                    <Button fullWidth variant="cta" size="lg" style={{ marginBottom: '1.5rem' }} disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>

                    <div style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        Already have an account? <Link to="/" style={{ color: '#60A5FA', fontWeight: '600' }}>Login here</Link>
                    </div>
                </form>

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Register;
