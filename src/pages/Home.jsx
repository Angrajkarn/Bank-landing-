import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, CreditCard, Shield, Globe, Landmark, FileText, Banknote, Umbrella } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import QuickAction from '../components/QuickAction';
import Tabs from '../components/Tabs';
import Input from '../components/Input';
import OffersSection from '../components/OffersSection';
import SecuritySection from '../components/SecuritySection';
import AppDownload from '../components/AppDownload';
import CalculatorsSection from '../components/CalculatorsSection';
import ImpactSection from '../components/ImpactSection';
import SupportSection from '../components/SupportSection';
import '../styles/components.css';

const Home = () => {
    const [loginType, setLoginType] = useState('personal');

    const quickActions = [
        { icon: <Zap size={24} />, label: "Money Transfer" },
        { icon: <FileText size={24} />, label: "Pay Bills" },
        { icon: <Smartphone size={24} />, label: "Recharge" },
        { icon: <CreditCard size={24} />, label: "Cards" },
        { icon: <Landmark size={24} />, label: "Invest" },
        { icon: <Globe size={24} />, label: "Forex" },
    ];

    const products = [
        {
            label: "Accounts & Deposits",
            content: (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Savings Account</h3>
                        <p className="text-gray-400 mb-4">Open a digital savings account instantly with video KYC. Earn up to 7% interest p.a.</p>
                        <Button variant="outline" size="sm">Apply Now</Button>
                    </Card>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Fixed Deposits</h3>
                        <p className="text-gray-400 mb-4">Secure your future with high returns. Senior citizens get 0.5% extra.</p>
                        <Button variant="outline" size="sm">Calculate Returns</Button>
                    </Card>
                </div>
            )
        },
        {
            label: "Loans",
            content: (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Home Loan</h3>
                        <p className="text-gray-400 mb-4">Turn your dream home into reality with attractive interest rates starting at 8.35%.</p>
                        <Button variant="outline" size="sm">Check Eligibility</Button>
                    </Card>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Personal Loan</h3>
                        <p className="text-gray-400 mb-4">Instant funds for all your needs. Paperless approval in 10 minutes.</p>
                        <Button variant="outline" size="sm">Get Quote</Button>
                    </Card>
                </div>
            )
        },
        {
            label: "Cards",
            content: (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Credit Cards</h3>
                        <p className="text-gray-400 mb-4">Lifestyle benefits, airport lounge access, and rewards on every spend.</p>
                        <Button variant="outline" size="sm">View Cards</Button>
                    </Card>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Forex Cards</h3>
                        <p className="text-gray-400 mb-4">Travel the world without currency worries. Zero markup on selected currencies.</p>
                        <Button variant="outline" size="sm">Order Now</Button>
                    </Card>
                </div>
            )
        },
        {
            label: "Invest & Insure",
            content: (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Mutual Funds</h3>
                        <p className="text-gray-400 mb-4">Start SIPs starting at just ₹500. Expert curated portfolios.</p>
                        <Button variant="outline" size="sm">Start Investing</Button>
                    </Card>
                    <Card hoverEffect>
                        <h3 className="text-xl font-bold mb-2">Life Insurance</h3>
                        <p className="text-gray-400 mb-4">Protect your family's future with affordable term plans.</p>
                        <Button variant="outline" size="sm">Get Protected</Button>
                    </Card>
                </div>
            )
        }
    ];

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Hero Section with Login Widget */}
            <section style={{
                paddingTop: '8rem',
                paddingBottom: '4rem',
                position: 'relative',
                background: 'radial-gradient(circle at 70% 30%, rgba(44, 116, 179, 0.1) 0%, rgba(2, 6, 23, 0) 60%)'
            }}>
                <div className="section-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    {/* Left: Content */}
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '1.5rem',
                            fontSize: '0.875rem'
                        }}>
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span>Safe, Secure, Smart Banking</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            India's Most Trusted <br />
                            <span className="gradient-text">Digital Bank</span>
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                            Experience the power of modern banking with UPI, instant loans, and smart investments all in one app.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Button variant="cta" size="lg">Open Account</Button>
                            <Button variant="secondary" size="lg">Know More</Button>
                        </div>
                    </div>

                    {/* Right: Login Widget */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card className="glass-card" style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back!</h2>

                            {/* Login Type Tabs */}
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Button
                                    variant={loginType === 'personal' ? 'primary' : 'ghost'}
                                    size="sm"
                                    style={{ flex: 1 }}
                                    onClick={() => setLoginType('personal')}
                                >
                                    Personal
                                </Button>
                                <Button
                                    variant={loginType === 'corporate' ? 'primary' : 'ghost'}
                                    size="sm"
                                    style={{ flex: 1 }}
                                    onClick={() => setLoginType('corporate')}
                                >
                                    Corporate
                                </Button>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    placeholder={loginType === 'personal' ? "Customer ID / User ID" : "Corporate ID / User ID"}
                                    style={{ marginBottom: '1rem' }}
                                />
                                <div style={{ marginBottom: '1rem' }}>
                                    <Input type="password" placeholder="Password / PIN" />
                                </div>
                                <Link to="/dashboard" style={{ width: '100%' }}>
                                    <Button fullWidth variant="cta" style={{ width: '100%', marginBottom: '1rem' }}>Login securely</Button>
                                </Link>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    <Link to="/forgot-password" className="hover:text-white">Forgot Password?</Link>
                                    <Link to="/register" className="hover:text-white">New User?</Link>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Offer Carousel */}
            {/* Offers Section */}
            <OffersSection />

            {/* Quick Actions Bar */}
            <section style={{ padding: '0 0 4rem', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
                <div className="section-wrapper">
                    <div style={{
                        background: 'rgba(15, 23, 42, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '1.5rem',
                        padding: '2rem',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
                    }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Quick Actions</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                            {quickActions.map((action, idx) => (
                                <QuickAction key={idx} icon={action.icon} label={action.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Tab Section */}
            <section style={{ padding: '4rem 0' }}>
                <div className="section-wrapper">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>One Bank, Many Possibilities</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Explore our range of products designed for your financial growth.</p>
                    </div>

                    <Tabs tabs={products} />
                </div>
            </section>

            {/* Trust/Stats Section */}
            <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
                <div className="section-wrapper">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>20M+</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Happy Customers</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-success)', marginBottom: '0.5rem' }}>₹500B+</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Transactions Processed</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-warning)', marginBottom: '0.5rem' }}>99.9%</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Uptime Reliability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Tools */}
            <CalculatorsSection />

            {/* Impact Section */}
            <ImpactSection />

            {/* Support Section */}
            <SupportSection />

            {/* Security Section */}
            <SecuritySection />



            {/* App Download */}
            <AppDownload />
        </div>
    );
};

export default Home;
