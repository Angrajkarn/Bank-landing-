import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft, Mail, Smartphone } from 'lucide-react';

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: Input, 2: OTP
    const [method, setMethod] = useState('email'); // 'email' or 'mobile'
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const [otp, setOtp] = useState(new Array(6).fill(""));

    // Timer Logic
    useEffect(() => {
        let interval;
        if (step === 2 && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [step, timer]);

    const handleSendOtp = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
            setTimer(30);
        }, 1500);
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Auto-focus next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert("Password Reset Successfully!"); // In real app, redirect or show success modal
            window.location.href = '/';
        }, 2000);
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
            <Card className="glass-card" style={{ width: '100%', maxWidth: '450px', padding: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                        {step === 1 ? 'Reset Password' : 'Enter OTP'}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {step === 1 ? 'We will send a code to reset your password' : `Code sent to your ${method}`}
                    </p>
                </div>

                {step === 1 ? (
                    <form onSubmit={handleSendOtp}>
                        {/* Method Toggle */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <Button
                                type="button"
                                variant={method === 'email' ? 'primary' : 'ghost'}
                                style={{ flex: 1, justifyContent: 'center' }}
                                onClick={() => setMethod('email')}
                            >
                                <Mail size={16} style={{ marginRight: '0.5rem' }} /> Email
                            </Button>
                            <Button
                                type="button"
                                variant={method === 'mobile' ? 'primary' : 'ghost'}
                                style={{ flex: 1, justifyContent: 'center' }}
                                onClick={() => setMethod('mobile')}
                            >
                                <Smartphone size={16} style={{ marginRight: '0.5rem' }} /> Mobile
                            </Button>
                        </div>

                        <Input
                            label={method === 'email' ? "Registered Email" : "Registered Mobile"}
                            placeholder={method === 'email' ? "Enter email address" : "Enter mobile number"}
                            type={method === 'email' ? "email" : "tel"}
                            required
                        />

                        <Button fullWidth variant="cta" size="lg" style={{ marginBottom: '1.5rem' }} disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send OTP'}
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={handleVerify}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={data}
                                    onChange={e => handleOtpChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                    style={{
                                        width: '45px',
                                        height: '55px',
                                        background: 'rgba(30, 41, 59, 0.6)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '8px',
                                        color: 'white',
                                        textAlign: 'center',
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        outline: 'none'
                                    }}
                                />
                            ))}
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            {timer > 0 ? (
                                <span>Resend code in <span style={{ color: 'var(--color-accent)', fontWeight: '600' }}>00:{timer < 10 ? `0${timer}` : timer}</span></span>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setTimer(30)}
                                    style={{ color: 'var(--color-accent)', fontWeight: '600', cursor: 'pointer' }}
                                >
                                    Resend Code
                                </button>
                            )}
                        </div>

                        <Button fullWidth variant="cta" size="lg" style={{ marginBottom: '1.5rem' }} disabled={isLoading}>
                            {isLoading ? 'Verifying...' : 'Verify & Reset'}
                        </Button>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="button"
                                onClick={() => { setStep(1); setTimer(30); }}
                                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'underline' }}
                            >
                                Change {method === 'email' ? 'Email' : 'Number'}
                            </button>
                        </div>
                    </form>
                )}

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <ArrowLeft size={16} /> Back to Login
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default ForgotPassword;
