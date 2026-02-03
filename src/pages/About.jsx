import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, TrendingUp, Shield } from 'lucide-react';
import Card from '../components/Card';
import '../styles/components.css';

const About = () => {
    const stats = [
        { label: "Active Users", value: "2M+" },
        { label: "Transactions", value: "$500M+" },
        { label: "Countries", value: "120+" },
        { label: "Team Members", value: "450+" }
    ];

    const values = [
        { icon: <Target size={32} />, title: "Customer First", desc: "Every decision starts and ends with our customers' needs." },
        { icon: <Shield size={32} />, title: "Uncompromising Security", desc: "Your trust is our currency. We never compromise on safety." },
        { icon: <TrendingUp size={32} />, title: "Continuous Innovation", desc: "Pushing boundaries to deliver the future of finance today." },
        { icon: <Heart size={32} />, title: "Empathy & Respect", desc: "Building a culture of inclusivity and understanding." }
    ];

    const leadership = [
        { name: "Aditi Rao", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
        { name: "Vikram Singh", role: "CTO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300" },
        { name: "Sarah Jenkins", role: "Head of Product", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300" },
        { name: "Rahul Gupta", role: "CFO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" }
    ];

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Hero */}
            <section style={{
                padding: '10rem 0 6rem',
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
                textAlign: 'center'
            }}>
                <div className="section-wrapper">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '2rem' }}
                    >
                        Driving the <span className="gradient-text">Future of Finance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}
                    >
                        NovaFin was built on a simple premise: Banking should be simple, transparent, and accessible to everyone.
                        We combine cutting-edge technology with human-centric design to empower your financial journey.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <div style={{ background: 'var(--color-accent)', padding: '4rem 0' }}>
                <div className="section-wrapper">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {stats.map((stat, i) => (
                            <div key={i} style={{ color: 'white' }}>
                                <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <section style={{ padding: '8rem 0' }}>
                <div className="section-wrapper">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Our Core Values</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>The principles that guide every feature we build.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {values.map((val, idx) => (
                            <Card key={idx} hoverEffect style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                                <div style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    color: 'var(--color-accent)'
                                }}>
                                    {val.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{val.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{val.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
                <div className="section-wrapper">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Meet the Leaders</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>The visionaries behind NovaFin.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {leadership.map((leader, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ height: '300px', overflow: 'hidden' }}>
                                        <img
                                            src={leader.img}
                                            alt={leader.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{leader.name}</h3>
                                        <p style={{ color: 'var(--color-accent)', fontWeight: '500' }}>{leader.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
