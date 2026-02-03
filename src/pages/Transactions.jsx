import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useDashboard } from '../context/DashboardContext';
import { Search, Filter, Download, ChevronLeft, ChevronRight, Calendar, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const Transactions = () => {
    const { transactions, formatCurrency } = useDashboard();

    // Local State for filtering and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All'); // All, Credit, Debit
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter Logic
    const filteredTransactions = transactions.filter(tx => {
        const matchesSearch = tx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.narration.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.amount.toString().includes(searchTerm);
        const matchesType = filterType === 'All'
            ? true
            : filterType === 'Credit' ? tx.isIncome : !tx.isIncome;

        return matchesSearch && matchesType;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <DashboardLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Account Statement</h1>
                        <p style={{ color: '#64748b' }}>View and download your comprehensive transaction history.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button variant="outline" size="sm" style={{ borderColor: '#cbd5e1', color: '#64748b' }}><Download size={16} style={{ marginRight: '0.5rem' }} /> PDF</Button>
                        <Button variant="outline" size="sm" style={{ borderColor: '#cbd5e1', color: '#64748b' }}><Download size={16} style={{ marginRight: '0.5rem' }} /> CVS</Button>
                    </div>
                </div>

                {/* Filters Bar */}
                <Card className="glass-card" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>

                        {/* Search */}
                        <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                            <input
                                type="text"
                                placeholder="Search by name, narration or amount..."
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                                    background: '#f8fafc',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '0.5rem',
                                    color: '#1e293b',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Type Filter */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {['All', 'Debit', 'Credit'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => { setFilterType(type); setCurrentPage(1); }}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        border: filterType === type ? 'none' : '1px solid #cbd5e1',
                                        background: filterType === type ? 'var(--color-accent)' : 'white',
                                        color: filterType === type ? 'white' : '#64748b',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        fontSize: '0.9rem',
                                        fontWeight: '600'
                                    }}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Pagination Summary */}
                        <div style={{ marginLeft: 'auto', fontSize: '0.9rem', color: '#64748b' }}>
                            Showing <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{filteredTransactions.length > 0 ? startIndex + 1 : 0}</span> to <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{Math.min(startIndex + itemsPerPage, filteredTransactions.length)}</span> of <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{filteredTransactions.length}</span> entries
                        </div>
                    </div>
                </Card>

                {/* Banking Table */}
                <Card className="glass-card" style={{ padding: 0, overflow: 'hidden', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', width: '120px' }}>DATE</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600' }}>NARRATION</th>
                                    <th style={{ textAlign: 'left', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', width: '100px' }}>METHOD</th>
                                    <th style={{ textAlign: 'right', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', width: '150px' }}>DEBIT (Dr)</th>
                                    <th style={{ textAlign: 'right', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', width: '150px' }}>CREDIT (Cr)</th>
                                    <th style={{ textAlign: 'center', padding: '1rem', color: '#64748b', fontSize: '0.85rem', fontWeight: '600', width: '100px' }}>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTransactions.map((tx, index) => (
                                    <tr
                                        key={tx.id}
                                        style={{
                                            borderBottom: '1px solid #f1f5f9',
                                            background: index % 2 === 0 ? 'white' : '#f8fafc'
                                        }}
                                    >
                                        <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#334155' }}>
                                            <div style={{ fontWeight: '500' }}>{tx.fullDate}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem' }}>{tx.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'monospace' }}>{tx.narration || `Ref: TXN${tx.id}8821`}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#475569', border: '1px solid #e2e8f0' }}>
                                                {tx.method || 'UPI'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', fontSize: '0.95rem' }}>
                                            {tx.isIncome ? '-' : <span style={{ color: '#ef4444' }}>{formatCurrency(tx.amount)}</span>}
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', fontSize: '0.95rem' }}>
                                            {!tx.isIncome ? '-' : <span style={{ color: '#16a34a' }}>{formatCurrency(tx.amount)}</span>}
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            <span style={{ fontSize: '0.75rem', fontWeight: '600', color: tx.status === 'Completed' ? '#16a34a' : '#d97706', background: tx.status === 'Completed' ? '#dcfce7' : '#fef3c7', padding: '0.25rem 0.5rem', borderRadius: '99px' }}>
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {currentTransactions.length === 0 && (
                                    <tr>
                                        <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                                            No transactions found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', borderTop: '1px solid #e2e8f0' }}>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                                style={{ opacity: currentPage === 1 ? 0.5 : 1, borderColor: '#cbd5e1', color: '#64748b' }}
                            >
                                <ChevronLeft size={16} /> Previous
                            </Button>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            border: 'none',
                                            background: currentPage === i + 1 ? 'var(--color-accent)' : 'transparent',
                                            color: currentPage === i + 1 ? 'white' : '#64748b',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                                style={{ opacity: currentPage === totalPages ? 0.5 : 1, borderColor: '#cbd5e1', color: '#64748b' }}
                            >
                                Next <ChevronRight size={16} />
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Transactions;
