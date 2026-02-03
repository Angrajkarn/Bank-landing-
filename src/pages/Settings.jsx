import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { User, Bell, Shield, Lock, Smartphone, Moon, Globe } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <User size={18} /> },
        { id: 'security', label: 'Security', icon: <Shield size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    ];

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Settings</h1>
                    <p style={{ color: '#64748b' }}>Manage your account and preferences.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
                    {/* Sidebar Tabs */}
                    <Card className="glass-card" style={{ padding: '0.5rem', height: 'fit-content', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    width: '100%',
                                    padding: '1rem',
                                    background: activeTab === tab.id ? 'var(--color-accent)' : 'transparent',
                                    color: activeTab === tab.id ? 'white' : '#64748b',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontWeight: '500',
                                    marginBottom: '0.25rem',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </Card>

                    {/* Content Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {activeTab === 'profile' && (
                            <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>Profile Information</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #475569, #334155)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--color-accent)' }}>
                                        <User size={40} color="white" />
                                    </div>
                                    <div>
                                        <Button variant="outline" size="sm">Change Avatar</Button>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>First Name</label>
                                        <Input defaultValue="Nivedita" style={{ color: '#1e293b', borderColor: '#cbd5e1' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>Last Name</label>
                                        <Input defaultValue="Khanna" style={{ color: '#1e293b', borderColor: '#cbd5e1' }} />
                                    </div>
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>Email Address</label>
                                    <Input defaultValue="nivedita.khanna@example.com" style={{ color: '#1e293b', borderColor: '#cbd5e1' }} />
                                </div>
                                <Button variant="primary">Save Changes</Button>
                            </Card>
                        )}

                        {activeTab === 'security' && (
                            <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>Security</h3>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f1f5f9' }}>
                                    <div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1e293b' }}>Two-Factor Authentication</div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Add an extra layer of security</div>
                                    </div>
                                    <div style={{ width: '48px', height: '24px', background: 'var(--color-accent)', borderRadius: '99px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: '26px' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f1f5f9' }}>
                                    <div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1e293b' }}>Change Password</div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Last changed 3 months ago</div>
                                    </div>
                                    <Button variant="outline" size="sm">Update</Button>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
                                    <div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1e293b' }}>Biometric Login</div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Use FaceID or Fingerprint</div>
                                    </div>
                                    <div style={{ width: '48px', height: '24px', background: '#e2e8f0', borderRadius: '99px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
                                    </div>
                                </div>
                            </Card>
                        )}

                        {activeTab === 'notifications' && (
                            <Card className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>Notifications</h3>
                                {[
                                    "Transaction Alerts",
                                    "Budget Exceeded",
                                    "Security Alerts",
                                    "Product Updates",
                                    "Marketing Newsletter"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: i !== 4 ? '1px solid #f1f5f9' : 'none' }}>
                                        <span style={{ fontWeight: '500', color: '#1e293b' }}>{item}</span>
                                        <div style={{
                                            width: '48px',
                                            height: '24px',
                                            background: i < 3 ? 'var(--color-accent)' : '#e2e8f0',
                                            borderRadius: '99px',
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}>
                                            <div style={{
                                                width: '20px',
                                                height: '20px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                position: 'absolute',
                                                top: '2px',
                                                left: i < 3 ? '26px' : '2px',
                                                boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;
