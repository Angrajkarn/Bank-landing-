import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import { useDashboard } from '../context/DashboardContext';
import { PieChart, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
    const { monthlySpending, formatCurrency } = useDashboard();

    // Simple CSS-only bar chart
    const data = [40, 65, 30, 80, 55, 90, 70];
    const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Analytics</h1>
                    <p style={{ color: '#64748b' }}>Insights into your spending habits.</p>
                </div>

                {/* KPI Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        { label: 'Total Spent', value: formatCurrency(monthlySpending), change: '+12%', color: '#60a5fa' },
                        { label: 'Avg. Transaction', value: formatCurrency(2500), change: '-5%', color: '#c084fc' },
                        { label: 'Highest Category', value: 'Shopping', sub: formatCurrency(15000), color: '#f472b6' },
                    ].map((item, i) => (
                        <Card key={i} className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.label}</p>
                            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#1e293b' }}>{item.value}</h3>
                            {item.change && (
                                <span style={{ color: item.change.startsWith('+') ? '#16a34a' : '#ef4444', fontSize: '0.9rem', fontWeight: '600' }}>{item.change} vs last month</span>
                            )}
                            {item.sub && <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.sub}</span>}
                        </Card>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                    {/* Weekly Spending Chart */}
                    <Card className="glass-card" style={{ display: 'flex', flexDirection: 'column', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>Weekly Activity</h3>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', background: '#dbeafe', color: '#1e40af', fontSize: '0.85rem', fontWeight: '600' }}>Week</span>
                                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', color: '#64748b', fontSize: '0.85rem' }}>Month</span>
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', height: '300px', paddingBottom: '2rem' }}>
                            {data.map((h, i) => (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, height: '100%' }}>
                                    <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            style={{
                                                width: '40%',
                                                background: 'linear-gradient(to top, #3b82f6, #60a5fa)',
                                                borderRadius: '8px 8px 0 0',
                                            }}
                                        />
                                    </div>
                                    <span style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.85rem' }}>{labels[i]}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Category Breakdown */}
                    <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>Categories</h3>

                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', position: 'relative' }}>
                            {/* Simple CSS Donut */}
                            <div style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'conic-gradient(#3b82f6 0deg 120deg, #ec4899 120deg 240deg, #a855f7 240deg 360deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ width: '160px', height: '160px', background: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Total</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>{formatCurrency(monthlySpending)}</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { label: "Shopping", color: "#3b82f6", percent: "33%" },
                                { label: "Entertainment", color: "#ec4899", percent: "33%" },
                                { label: "Bills & Utilities", color: "#a855f7", percent: "34%" },
                            ].map((cat, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color }} />
                                        <span style={{ fontSize: '0.9rem', color: '#334155' }}>{cat.label}</span>
                                    </div>
                                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{cat.percent}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>
        </DashboardLayout>
    );
};

export default Analytics;
