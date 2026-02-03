import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/components.css';

const CalculatorsSection = () => {
    const [activeTab, setActiveTab] = useState('Personal Loan');
    const [amount, setAmount] = useState(1190000);
    const [years, setYears] = useState(21);
    const [rate, setRate] = useState(10.5);
    const [emi, setEmi] = useState(0);

    const tabs = ['Personal Loan', 'Home Loan', 'Car Loan', 'Education Loan'];

    useEffect(() => {
        const principal = amount;
        const interest = rate / 12 / 100;
        const tenureMonths = years * 12;

        const calculatedEmi = (principal * interest * Math.pow(1 + interest, tenureMonths)) / (Math.pow(1 + interest, tenureMonths) - 1);
        setEmi(Math.round(calculatedEmi));
    }, [amount, years, rate]);

    // Helper to calculate progress percentage for slider background
    const getProgress = (value, min, max) => {
        return ((value - min) * 100) / (max - min) + '%';
    };

    return (
        <section style={{ padding: '6rem 0', background: '#F8FAFC', color: '#0f172a' }}>
            <div className="section-wrapper">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#0B1120' }}>Simplify financial planning</h2>
                    <p style={{ color: '#64748B', fontSize: '1.1rem' }}>Calculate your EMIs and plan your loans better.</p>
                </div>

                {/* Tab Navigation - Underline Style */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', borderBottom: '1px solid #e2e8f0' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '1rem 0.5rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === tab ? '3px solid #003366' : '3px solid transparent',
                                color: activeTab === tab ? '#003366' : '#94A3B8',
                                fontWeight: activeTab === tab ? '700' : '500',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                marginBottom: '-2px' // Overlap border
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    alignItems: 'stretch'
                }}>
                    {/* Left: Input Area */}
                    <div style={{
                        background: '#EFF6FF', // Light blue bg
                        padding: '3rem',
                        borderRadius: '1.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}>

                        {/* Amount Slider */}
                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                                <label style={{ fontWeight: '700', color: '#1e293b' }}>Loan Amount</label>
                                <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                    <span style={{ fontWeight: '800', color: '#003366', fontSize: '1.1rem' }}>
                                        ₹ {amount.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <input
                                type="range"
                                className="custom-range"
                                min="50000"
                                max="5000000"
                                step="10000"
                                value={amount}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                                style={{ '--range-progress': getProgress(amount, 50000, 5000000) }}
                            />
                        </div>

                        {/* Tenure Slider */}
                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                                <label style={{ fontWeight: '700', color: '#1e293b' }}>Tenure (Years)</label>
                                <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                    <span style={{ fontWeight: '800', color: '#003366', fontSize: '1.1rem' }}>
                                        {years} Years
                                    </span>
                                </div>
                            </div>
                            <input
                                type="range"
                                className="custom-range"
                                min="1"
                                max="30"
                                value={years}
                                onChange={(e) => setYears(parseInt(e.target.value))}
                                style={{ '--range-progress': getProgress(years, 1, 30) }}
                            />
                        </div>

                        {/* Interest Rate Slider */}
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                                <label style={{ fontWeight: '700', color: '#1e293b' }}>Interest Rate (% P.A.)</label>
                                <div style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                    <span style={{ fontWeight: '800', color: '#003366', fontSize: '1.1rem' }}>
                                        {rate}%
                                    </span>
                                </div>
                            </div>
                            <input
                                type="range"
                                className="custom-range"
                                min="5"
                                max="20"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(parseFloat(e.target.value))}
                                style={{ '--range-progress': getProgress(rate, 5, 20) }}
                            />
                        </div>
                    </div>

                    {/* Right: Result Area */}
                    <div style={{
                        background: '#DBEAFE', // Slightly darker blue
                        padding: '3rem',
                        borderRadius: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
                    }}>
                        <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '1rem', fontSize: '1.1rem' }}>Your Monthly EMI will be</p>
                        <h3 style={{ textAlign: 'center', fontSize: '4rem', fontWeight: '800', color: '#003366', marginBottom: '3rem', lineHeight: 1 }}>
                            ₹ {emi.toLocaleString()}
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
                                <span style={{ color: '#475569', fontWeight: '500' }}>Principal Amount</span>
                                <span style={{ fontWeight: '800', color: '#0f172a' }}>₹ {amount.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
                                <span style={{ color: '#475569', fontWeight: '500' }}>Total Interest</span>
                                <span style={{ fontWeight: '800', color: '#0f172a' }}>₹ {((emi * years * 12) - amount).toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#475569', fontWeight: '500' }}>Total Payable</span>
                                <span style={{ fontWeight: '800', color: '#0f172a' }}>₹ {(emi * years * 12).toLocaleString()}</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button style={{
                                flex: 1,
                                background: '#2563eb',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)'
                            }}>
                                Apply Now
                            </button>
                            <button style={{
                                flex: 1,
                                background: 'transparent',
                                color: '#0f172a',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                fontSize: '1rem',
                                border: '1px solid #94a3b8',
                                cursor: 'pointer'
                            }}>
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalculatorsSection;
