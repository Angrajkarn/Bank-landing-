import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useDashboard } from '../context/DashboardContext';
import { CreditCard, Shield, Smartphone, Eye, EyeOff, Lock, Globe, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const MyCards = () => {
    const [showNumber, setShowNumber] = useState(false);
    const { card, toggleFreezeCard, user, formatCurrency } = useDashboard();

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>My Cards</h1>
                    <p style={{ color: '#64748b' }}>Manage your physical and virtual cards securely.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                    {/* Left: Card Visual */}
                    <div>
                        <motion.div
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1, filter: card.isFrozen ? 'grayscale(0.8)' : 'none' }}
                            transition={{ duration: 0.8 }}
                            style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
                                borderRadius: '1.5rem',
                                padding: '2rem',
                                aspectRatio: '1.586', // Standard credit card ratio
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.1, pointerEvents: 'none' }}></div>

                            {/* Gloss effect */}
                            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)', transform: 'rotate(-45deg)' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', position: 'relative' }}>
                                <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)' }}>NovaFin</div>
                                <CreditCard size={32} color="white" />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                                <div style={{ fontSize: '1.75rem', letterSpacing: '4px', fontFamily: 'monospace', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    {showNumber ? "4582 1928 3847 9821" : "4582 •••• •••• 9821"}
                                </div>
                                <button onClick={() => setShowNumber(!showNumber)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
                                    {showNumber ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Card Holder</div>
                                    <div style={{ fontWeight: '600', letterSpacing: '1px', fontSize: '1.1rem' }}>{user.name.toUpperCase()} {user.lastName.toUpperCase()}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Expires</div>
                                    <div style={{ fontWeight: '600' }}>12/28</div>
                                </div>
                            </div>
                        </motion.div>

                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <Button
                                variant={card.isFrozen ? 'primary' : 'outline'}
                                fullWidth
                                onClick={toggleFreezeCard}
                                style={{ gap: '0.5rem', borderColor: card.isFrozen ? 'transparent' : 'rgba(255,255,255,0.1)' }}
                            >
                                <Lock size={18} /> {card.isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                            </Button>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>Card Settings</h3>

                            {[
                                { icon: <Globe size={20} />, label: "International Transactions", desc: "Enable spending abroad", active: card.internationalEnabled },
                                { icon: <ShoppingBag size={20} />, label: "Online Payments", desc: "Enable e-commerce transactions", active: card.onlineEnabled },
                                { icon: <Smartphone size={20} />, label: "Contactless Payments", desc: "Tap to pay at terminals", active: false },
                                { icon: <Shield size={20} />, label: "ATM Withdrawals", desc: "Enable cash withdrawals", active: true },
                            ].map((setting, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: i !== 3 ? '1px solid #f1f5f9' : 'none' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ color: 'var(--color-accent)' }}>{setting.icon}</div>
                                        <div>
                                            <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1e293b' }}>{setting.label}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{setting.desc}</div>
                                        </div>
                                    </div>
                                    <div style={{
                                        width: '48px',
                                        height: '24px',
                                        background: setting.active ? 'var(--color-accent)' : '#e2e8f0',
                                        borderRadius: '99px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            background: 'white',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            top: '2px',
                                            left: setting.active ? '26px' : '2px',
                                            transition: 'left 0.2s',
                                            boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </Card>

                        <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>Spending Limit</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ color: '#64748b' }}>Monthly Limit</span>
                                <span style={{ fontWeight: 'bold', color: '#1e293b' }}>{formatCurrency(card.limit)}</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '99px', marginBottom: '1.5rem', position: 'relative' }}>
                                <div style={{ width: `${(card.spent / card.limit) * 100}%`, height: '100%', background: 'var(--color-accent)', borderRadius: '99px' }} />
                                <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '-6px', left: `${(card.spent / card.limit) * 100}%`, cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', border: '1px solid #e2e8f0' }} />
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{formatCurrency(card.spent)} spent of {formatCurrency(card.limit)} limit</p>
                        </Card>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
};

export default MyCards;
