import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    CreditCard,
    ArrowRightLeft,
    Settings,
    LogOut,
    Bell,
    User,
    Menu,
    X,
    PieChart,
    Wallet,
    ChevronDown,
    Search,
    HelpCircle,
    Shield
} from 'lucide-react';
import Button from './Button';
import { useDashboard } from '../context/DashboardContext';

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const { user } = useDashboard();

    // Netbanking Style Text Menu
    const menuItems = [
        { label: "ACCOUNTS", path: "/dashboard", sub: ["Savings", "Current", "FD/RD"] },
        { label: "PAYMENTS & TRANSFER", path: "/dashboard/transactions", sub: ["Quick Transfer", "Add Beneficiary", "UPI", "BillPay"] },
        { label: "CARDS", path: "/dashboard/cards", sub: ["Credit Cards", "Debit Cards", "Prepaid"] },
        { label: "LOANS", path: "/dashboard", sub: ["Personal", "Home", "Vehicle"] }, // Link to dashboard for now
        { label: "INVEST", path: "/dashboard/analytics", sub: ["Mutual Funds", "Stocks", "NPS"] },
        { label: "INSURE", path: "/dashboard", sub: ["Life", "Health", "Motor"] },
        { label: "OFFERS", path: "/dashboard", sub: ["Exclusive Deals"] },
    ];

    return (
        <div style={{ minHeight: '100vh', background: '#f1f5f9' }}>

            {/* Top Header (Corporate Blue) */}
            <header style={{ background: '#0f172a', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '0.3rem', borderRadius: '0.4rem' }}>
                                <CreditCard size={20} color="white" strokeWidth={2.5} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'white' }}>
                                Nova<span style={{ color: 'var(--color-accent)' }}>Fin</span>
                            </span>
                        </div>
                        <span style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></span>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.5px' }}>NETBANKING</span>
                    </div>

                    {/* Top Right Utilities */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                            <Shield size={14} color="#4ade80" />
                            <span>Secure Session</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Welcome</div>
                            <div style={{ fontWeight: '600' }}>{user.name} {user.lastName}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Last Login</div>
                            <div style={{ fontFamily: 'monospace' }}>{new Date().toLocaleDateString()} 10:45 AM</div>
                        </div>
                        <Button
                            variant="primary"
                            size="sm"
                            style={{ background: '#ef4444', border: 'none', height: '30px', fontSize: '0.8rem' }}
                            onClick={() => window.location.href = '/'}
                        >
                            <LogOut size={14} style={{ marginRight: '0.25rem' }} /> Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Navigation Bar (Lighter Navy) */}
            <nav style={{ background: '#1e293b', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', position: 'sticky', top: 0, zIndex: 50 }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '2rem' }}>
                        {menuItems.map((item, index) => (
                            <li key={index} style={{ position: 'relative', group: 'nav-item' }}>
                                <Link
                                    to={item.path}
                                    style={{
                                        display: 'block',
                                        padding: '1rem 0.5rem',
                                        color: '#e2e8f0',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        letterSpacing: '0.5px',
                                        borderBottom: location.pathname === item.path ? '3px solid var(--color-accent)' : '3px solid transparent',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseOut={(e) => e.currentTarget.style.color = '#e2e8f0'}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0.4rem 0.75rem', borderRadius: '4px' }}>
                                <input placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '0.85rem', width: '120px', outline: 'none' }} />
                                <Search size={14} color="#94a3b8" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Sub-Header / Breadcrumbs & Quick Alerts */}
            <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', color: '#64748b' }}>
                        <span>Home</span>
                        <span>/</span>
                        <span style={{ fontWeight: '600', color: '#0f172a' }}>{menuItems.find(i => i.path === location.pathname)?.label || 'Overview'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', background: '#fffbeb', padding: '0.25rem 0.75rem', borderRadius: '99px', border: '1px solid #fcd34d' }}>
                        <Bell size={14} />
                        <span>KYC Update pending for Demat Account</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem', minHeight: 'calc(100vh - 180px)' }}>
                {children}
            </main>

            {/* Footer */}
            <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '1.5rem', fontSize: '0.8rem', textAlign: 'center' }}>
                <p>&copy; 2026 NovaFin Bank Ltd. All rights reserved. | <a href="#" style={{ color: '#cbd5e1' }}>Privacy Policy</a> | <a href="#" style={{ color: '#cbd5e1' }}>Terms & Conditions</a></p>
                <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>NovaFin is a licensed banking entity regularted by RBI.</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;
