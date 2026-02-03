import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useDashboard } from '../context/DashboardContext';
import { Plus, ShoppingBag, Coffee, Zap, Car, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Budgets = () => {
    const { budgets, formatCurrency } = useDashboard();

    const getIcon = (iconName) => {
        switch (iconName) {
            case "🛍️": return <ShoppingBag size={20} />;
            case "☕": return <Coffee size={20} />;
            case "⚡": return <Zap size={20} />;
            case "🚗": return <Car size={20} />;
            default: return <ShoppingBag size={20} />;
        }
    };

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Budgets</h1>
                        <p style={{ color: '#64748b' }}>Track your spending and save more.</p>
                    </div>
                    <Button variant="cta" size="sm" style={{ gap: '0.5rem' }}><Plus size={18} /> Create Budget</Button>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {budgets.map((budget, i) => {
                        const percentage = (budget.spent / budget.limit) * 100;
                        const isNearLimit = percentage > 85;

                        return (
                            <Card key={budget.id} className="glass-card" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${budget.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: budget.color }}>
                                            {getIcon(budget.icon)}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>{budget.category}</h3>
                                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{formatCurrency(budget.spent)} spent of {formatCurrency(budget.limit)}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b' }}>{Math.round(percentage)}%</div>
                                        <div style={{ fontSize: '0.85rem', color: isNearLimit ? '#d97706' : '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
                                            {isNearLimit ? <AlertTriangle size={14} /> : <CheckCircle size={14} />}
                                            {isNearLimit ? 'Near Limit' : 'On Track'}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '100%', height: '10px', background: '#f1f5f9', borderRadius: '99px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percentage}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        style={{
                                            height: '100%',
                                            background: budget.color,
                                            borderRadius: '99px',
                                        }}
                                    />
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Budgets;
