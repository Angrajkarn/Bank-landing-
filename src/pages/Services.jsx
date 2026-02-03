import React from 'react';
import { CreditCard, Smartphone, Briefcase, TrendingUp, ShieldCheck, Globe, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <Smartphone size={32} />,
            title: "Digital Banking",
            description: "Manage your money on the go with our award-winning mobile app. Checks, transfers, and bill pay at your fingertips."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Smart Investing",
            description: "Automated portfolios tailored to your risk tolerance. Start investing with as little as $1."
        },
        {
            icon: <CreditCard size={32} />,
            title: "Premium Cards",
            description: "Metal cards with up to 5% cash back on travel and dining. No annual fees for the first year."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Insurance",
            description: "Protect what matters most. Life, auto, and home insurance integrated directly into your dashboard."
        },
        {
            icon: <Globe size={32} />,
            title: "International Transfers",
            description: "Send money abroad with real exchange rates and low fees. Supported in over 130 countries."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Business Solutions",
            description: "Tools for startups and enterprises. Payroll, expenses, and invoicing all in one place."
        }
    ];

    const benefits = [
        "24/7 dedicated customer support",
        "Zero hidden fees on all transactions",
        "Military-grade security encryption",
        "Instant alerts and real-time tracking"
    ];

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Hero Section */}
            <section style={{
                padding: '10rem 0 6rem',
                background: 'radial-gradient(circle at 50% 30%, rgba(44, 116, 179, 0.15) 0%, rgba(2, 6, 23, 0) 70%)',
                textAlign: 'center'
            }}>
                <div className="section-wrapper">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}
                    >
                        Banking Reimagined for <br />
                        <span className="gradient-text">Modern Life</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}
                    >
                        Comprehensive financial solutions designed to help you fast-track your goals and secure your future.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '0 0 6rem' }}>
                <div className="section-wrapper">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card hoverEffect className="service-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        color: 'var(--color-accent)',
                                        marginBottom: '1.5rem',
                                        background: 'rgba(44, 116, 179, 0.1)',
                                        width: 'fit-content',
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', flex: 1 }}>{service.description}</p>
                                    <Button variant="outline" size="sm" style={{ alignSelf: 'start' }}>Learn More</Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
                <div className="section-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Why NovaFin?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            We aren't just a bank; we are your financial partner. Our technology-first approach ensures you have the best tools at your disposal.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {benefits.map((benefit, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle size={24} color="var(--color-success)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
                        padding: '3rem',
                        borderRadius: '2rem',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--color-accent)', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: 'bold' }}>
                            Rated #1
                        </div>
                        <h3 style={{ fontSize: '4rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>4.9/5</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>App Store Rating</p>
                        <div style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: '600' }}>Trusted by 2M+ Users</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
