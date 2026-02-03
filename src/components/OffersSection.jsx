import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Plane, Gift, Headphones, Briefcase, CreditCard, DollarSign, ShoppingBag, ArrowRight } from 'lucide-react';

const OffersSection = () => {
    // Floating animation variants
    const float = (delay) => ({
        initial: { y: 0 },
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }
        }
    });

    return (
        <section style={{
            padding: '4rem 0',
            background: 'radial-gradient(circle at 30% 50%, #0f3b7d 0%, #020617 100%)',
            overflow: 'hidden',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="section-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* Left: Content */}
                <div style={{ zIndex: 10 }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white' }}
                    >
                        Exclusive deals, <br />
                        cashback and <br />
                        discounts for you!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '500px' }}
                    >
                        Shop smart with NovaFin. Get up to 10% instant rewards on flights, electronics, and lifestyle brands.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button variant="white" size="lg" style={{ color: '#0f3b7d', fontWeight: 'bold' }}>
                            Explore Offers <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Button>
                    </motion.div>
                </div>

                {/* Right: 3D Visualization */}
                <div style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0,0,0,0) 70%)',
                        zIndex: 0
                    }} />

                    {/* Central Phone */}
                    <motion.div
                        variants={float(0)}
                        initial="initial"
                        animate="animate"
                        style={{
                            width: '260px',
                            height: '520px',
                            background: '#020617',
                            border: '8px solid #334155',
                            borderRadius: '2.5rem',
                            position: 'relative',
                            zIndex: 5,
                            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Notch */}
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '25px', background: '#334155', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', zIndex: 10 }} />

                        {/* Screen Content: Banking App UI */}
                        <div style={{ padding: '3.5rem 1.5rem 1.5rem', height: '100%', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', color: 'white' }}>
                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Total Balance</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$24,500.00</div>
                                </div>
                                <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#3b82f6' }} />
                            </div>

                            {/* Cards */}
                            <div style={{
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                marginBottom: '2rem',
                                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Platinum Debit</span>
                                    <CreditCard size={20} />
                                </div>
                                <div style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>•••• 4821</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Exp 12/28</div>
                            </div>

                            {/* Recent Transactions */}
                            <div>
                                <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#94a3b8' }}>Recent Activity</h4>
                                {[
                                    { icon: <ShoppingBag size={16} />, name: "Amazon", date: "Today", amount: "-$120" },
                                    { icon: <DollarSign size={16} />, name: "Salary", date: "Yesterday", amount: "+$3,200", green: true },
                                    { icon: <Briefcase size={16} />, name: "Uber", date: "Yesterday", amount: "-$15" }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}>{item.icon}</div>
                                            <div>
                                                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item.name}</div>
                                                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{item.date}</div>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: '600', color: item.green ? '#4ade80' : 'white' }}>{item.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Objets */}
                    {/* Plane */}
                    <motion.div
                        variants={float(0.5)} initial="initial" animate="animate"
                        style={{ position: 'absolute', top: '10%', right: '-5%', color: 'white', zIndex: 6, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
                    >
                        <Plane size={80} fill="#f8fafc" stroke="#475569" strokeWidth={1} />
                    </motion.div>

                    {/* Gift */}
                    <motion.div
                        variants={float(1.5)} initial="initial" animate="animate"
                        style={{ position: 'absolute', bottom: '15%', left: '-10%', color: '#ef4444', zIndex: 6, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
                    >
                        <Gift size={70} fill="#f87171" stroke="white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Headphones */}
                    <motion.div
                        variants={float(2)} initial="initial" animate="animate"
                        style={{ position: 'absolute', top: '40%', right: '-15%', color: '#f59e0b', zIndex: 4 }}
                    >
                        <Headphones size={60} fill="#fbbs24" stroke="white" strokeWidth={1.5} />
                    </motion.div>

                    {/* Briefcase */}
                    <motion.div
                        variants={float(1)} initial="initial" animate="animate"
                        style={{ position: 'absolute', top: '-5%', left: '0%', color: '#a8a29e', zIndex: 4 }}
                    >
                        <Briefcase size={55} fill="#d6d3d1" stroke="#57534e" strokeWidth={1.5} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OffersSection;
