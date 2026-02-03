import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLink = ({ title, links }) => (
    <div style={{
        background: '#FFFBE6',
        padding: '2rem',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
        border: '1px solid rgba(0,0,0,0.05)'
    }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937', marginBottom: '1.5rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {links.map((link, idx) => (
                <a key={idx} href="#" style={{ color: '#4B5563', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-black">
                    {link}
                </a>
            ))}
        </div>
        <button style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            color: '#DC2626',
            fontWeight: '600',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
        }}>
            View More <ChevronRight size={16} />
        </button>
    </div>
);

const SupportSection = () => {
    return (
        <section style={{ padding: '6rem 0', background: '#FFDE59', position: 'relative', overflow: 'hidden' }}>

            {/* Background Circle Element */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                borderRadius: '50%',
                border: '80px solid rgba(255,255,255,0.2)',
                zIndex: 0
            }} />

            <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>

                {/* Hero Headset and Search */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', color: '#1F2937', marginBottom: '2rem' }}>
                            How can we help you?
                        </h2>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Tell us about your issue"
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    borderRadius: '1rem',
                                    border: 'none',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                                }}
                            />
                            <button style={{
                                position: 'absolute',
                                right: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#9CA3AF'
                            }}>
                                ➤
                            </button>
                        </div>
                    </div>

                    <div style={{ display: 'none', md: { display: 'block' } }}>
                        {/* Hiding on mobile, showing on desktop would require media query logic or CSS class */}
                        <img
                            src="/assets/support_hero.png"
                            alt="Support Headset"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                                animation: 'float 5s ease-in-out infinite'
                            }}
                        />
                    </div>
                </div>

                {/* Quick Link Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <QuickLink
                        title="Accounts"
                        links={['Update PAN', 'Consent For EKYC', 'Add/Modify Nominee']}
                    />
                    <QuickLink
                        title="Deposit"
                        links={['Break Deposit', 'Balance Inquiry', 'Account Statement']}
                    />
                    <QuickLink
                        title="Cards"
                        links={['Track Credit Card', 'Claim Reward Points', 'Credit Card Bill Payment']}
                    />
                    <QuickLink
                        title="Loans"
                        links={['Change Contact Details', 'e-Mandate Registration', 'View EMI Amount']}
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
