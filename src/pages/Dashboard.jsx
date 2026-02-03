import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useDashboard } from '../context/DashboardContext';
import { TrendingUp, ArrowUpRight, ArrowDownLeft, MoreHorizontal, ShieldCheck, Wallet, PieChart, Settings, Plus, CreditCard, Smartphone, Zap, FileText, Landmark, Key, Gift, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        user,
        balance,
        monthlySpending,
        fdBalance,
        rdBalance,
        transactions,
        card,
        toggleFreezeCard,
        addTransaction,
        formatCurrency
    } = useDashboard();

    const handleQuickTransfer = () => {
        const names = ["Ramesh Kumar", "Suresh Raina", "Priya Singh", "Anjali Mehta"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const amount = Math.floor(Math.random() * 5000) + 500;

        addTransaction({
            name: randomName,
            category: "Transfer",
            amount: amount,
            isIncome: false,
            icon: "👤",
            type: "debit"
        });
    };

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header Welcome */}
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Good Morning, {user.name}</h1>
                        <p style={{ color: '#64748b' }}>Last login: Today, 10:45 AM IST</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button variant="outline" size="sm" style={{ borderColor: '#cbd5e1', color: '#64748b' }}>Help & Support</Button>
                    </div>
                </div>

                {/* Main Account Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

                    {/* Savings Account */}
                    <Card className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(15, 23, 42, 0.6))', border: '1px solid rgba(59, 130, 246, 0.3)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Landmark size={20} color="#60a5fa" />
                                    <span style={{ fontWeight: '600', color: '#cbd5e1' }}>Savings Account</span>
                                </div>
                                <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'monospace' }}>A/c ...8821</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{formatCurrency(balance)}</h2>
                                <span style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: '600' }}>Available</span>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Button size="sm" variant="cta" onClick={handleQuickTransfer} style={{ flex: 1, justifyContent: 'center' }}><ArrowUpRight size={16} style={{ marginRight: '0.5rem' }} /> Transfer</Button>
                                <Button size="sm" variant="outline" style={{ flex: 1, justifyContent: 'center', borderColor: 'rgba(255,255,255,0.1)' }}><FileText size={16} style={{ marginRight: '0.5rem' }} /> Statement</Button>
                            </div>
                        </div>
                    </Card>

                    {/* Fixed Deposits Summary */}
                    <Card className="glass-card" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ShieldCheck size={20} color="#f472b6" />
                                <span style={{ fontWeight: '600', color: '#cbd5e1' }}>Deposits (FD/RD)</span>
                            </div>
                            <Button variant="ghost" size="sm" style={{ padding: 0, color: 'var(--color-accent)' }}>+ Open New</Button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Total FD Value</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{formatCurrency(fdBalance)}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>7.25% p.a.</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Total RD Value</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{formatCurrency(rdBalance)}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#f472b6', background: 'rgba(244, 114, 182, 0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>Maturity: 2028</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Credit Card Snapshot */}
                    <Card className="glass-card" style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CreditCard size={20} color="#c084fc" />
                                <span style={{ fontWeight: '600', color: '#cbd5e1' }}>Credit Card</span>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Due in 12 days</span>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Unbilled Amount</span>
                                <span style={{ fontWeight: 'bold' }}>{formatCurrency(card.spent)}</span>
                            </div>
                            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(card.spent / card.limit) * 100}%` }}
                                    style={{ height: '100%', background: '#c084fc' }}
                                />
                            </div>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>Available Limit: {formatCurrency(card.limit - card.spent)}</div>
                        </div>

                        <Button size="sm" fullWidth variant="outline" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>Pay Bill</Button>
                    </Card>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '1.5rem', alignItems: 'start' }}>

                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>


                        {/* Indian Quick Links Grid */}
                        <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>BillPay & Recharge</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', textAlign: 'center' }}>
                                {[
                                    { icon: <Smartphone />, label: "Mobile" },
                                    { icon: <Zap />, label: "Electricity" },
                                    { icon: <CreditCard />, label: "Credit Card" },
                                    { icon: <Landmark />, label: "FASTag" },
                                    { icon: <Key />, label: "Rent Pay" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = 1} onMouseOut={(e) => e.currentTarget.style.opacity = 0.8}>
                                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            {item.icon}
                                        </div>
                                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Recent Transactions */}
                        <Card className="glass-card" style={{ padding: '0', overflow: 'hidden', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>Recent Transactions</h3>
                                <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard/transactions')} style={{ color: 'var(--color-accent)' }}>View All</Button>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                {/* Transaction rows - reused from previous design but simplified */}
                                {transactions.slice(0, 4).map((tx, i) => (
                                    <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', borderBottom: i !== 3 ? '1px solid #f1f5f9' : 'none' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ background: '#f8fafc', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tx.icon}</div>
                                            <div>
                                                <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1e293b' }}>{tx.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{tx.date}</div>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: '600', color: tx.isIncome ? '#16a34a' : '#1e293b' }}>
                                            {tx.isIncome ? '+' : '-'}{formatCurrency(tx.amount)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Offers Banner */}
                        <Card className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(15, 23, 42, 0) 100%)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#60a5fa' }}>Pre-approved Offers</h3>
                                <Gift size={16} color="#60a5fa" />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Instant Personal Loan</h4>
                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem' }}>Get up to {formatCurrency(500000)} in your account instantly. No paperwork.</p>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', background: '#fff', color: '#000', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>@ 10.49% p.a.</span>
                                </div>
                            </div>
                            <Button fullWidth variant="cta">Apply Now</Button>
                        </Card>

                        {/* UPI QR */}
                        <Card className="glass-card" style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem' }}>Scan & Pay</h3>
                            <div style={{ width: '150px', height: '150px', margin: '0 auto 1.5rem', background: 'white', padding: '10px', borderRadius: '1rem' }}>
                                <div style={{ width: '100%', height: '100%', background: 'black' }}></div>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Scan any UPI QR code to pay instantly</p>
                        </Card>

                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
