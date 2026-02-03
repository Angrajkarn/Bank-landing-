import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, animate } from 'framer-motion';

const CountUp = ({ to, duration = 2 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(0, to, {
            duration: duration,
            onUpdate: (value) => {
                node.textContent = Math.floor(value);
            }
        });

        return () => controls.stop();
    }, [to, inView, duration]);

    return <span ref={nodeRef}>0</span>;
};

const StatCard = ({ number, suffix, label, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderBottom: '4px solid #F59E0B' // Amber accent like reference
            }}
        >
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0A2647', marginBottom: '0.5rem' }}>
                <CountUp to={number} />{suffix}
            </h3>
            <p style={{ color: '#64748B', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</p>
        </motion.div>
    );
};

const ImpactSection = () => {
    return (
        <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
            {/* Background Image with Gradient Overlay matching reference */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <img
                    src="/assets/impact_bg.png"
                    alt="Impact Background"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(6, 182, 212, 0.4) 30%, rgba(6, 182, 212, 0.85) 100%)'
                }} />
            </div>

            <div className="section-wrapper" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', maxWidth: '650px', textAlign: 'right' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ background: 'white', display: 'inline-flex', padding: '0.5rem 1.5rem', borderRadius: '4px', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <span style={{ color: '#0A2647', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase' }}>NOVAFIN FOUNDATION</span>
                        </div>

                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', color: 'white', marginBottom: '1.5rem', textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
                            Building a better India –<br />one step at a time.
                        </h2>

                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500', maxWidth: '500px', marginLeft: 'auto' }}>
                            From education to environment and everything in between – NovaFin Foundation is transforming India.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <StatCard number={12} suffix="Lakh+" label="Households Impacted" delay={0.2} />
                        <StatCard number={10} suffix="Crore+" label="Lives Impacted" delay={0.4} />
                        <StatCard number={20} suffix="Lakh+" label="Teachers Benefited" delay={0.6} />
                        <StatCard number={9} suffix="K+" label="Villages Covered" delay={0.8} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
