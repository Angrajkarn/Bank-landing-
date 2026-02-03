import React, { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
    // User Profile State
    const [user, setUser] = useState({
        name: "Nivedita",
        lastName: "Khanna",
        email: "nivedita.khanna@example.com",
        avatar: null, // Could be a URL
        isPremium: true
    });

    // Financial State
    const [balance, setBalance] = useState(1245000.00); // Savings Account
    const [monthlySpending, setMonthlySpending] = useState(45250.00);
    const [savings, setSavings] = useState(500000.00);
    const [fdBalance, setFdBalance] = useState(850000.00); // Fixed Deposits
    const [rdBalance, setRdBalance] = useState(50000.00); // Recurring Deposits
    const [investments, setInvestments] = useState(420000.00); // Mutual Funds/Stocks

    // Card State
    const [card, setCard] = useState({
        isFrozen: false,
        onlineEnabled: true,
        internationalEnabled: true,
        limit: 100000,
        spent: 45250
    });

    // Transactions State - Populating with realistic Indian banking data
    const [transactions, setTransactions] = useState(() => {
        const initialTxns = [
            { id: 101, name: "Zomato", narration: "UPI/223491/Zomato", category: "Food", date: "Today", fullDate: new Date().toLocaleDateString(), time: "08:15 PM", amount: 450.00, isIncome: false, status: "Completed", icon: "🍽️", type: "debit", method: "UPI" },
            { id: 102, name: "Ramesh Kumar", narration: "IMPS-Ref-99281-Ramesh", category: "Transfer", date: "Today", fullDate: new Date().toLocaleDateString(), time: "10:30 AM", amount: 15000.00, isIncome: true, status: "Completed", icon: "👤", type: "credit", method: "IMPS" },
            { id: 103, name: "Reliance Jio", narration: "Recharge/9876543210", category: "Utilities", date: "Yesterday", fullDate: new Date(Date.now() - 86400000).toLocaleDateString(), time: "06:45 PM", amount: 666.00, isIncome: false, status: "Completed", icon: "📱", type: "debit", method: "UPI" },
            { id: 104, name: "Netflix", narration: "ACH-Debit-NETFLIX-MUMBAI", category: "Subscription", date: "Yesterday", fullDate: new Date(Date.now() - 86400000).toLocaleDateString(), time: "09:00 AM", amount: 649.00, isIncome: false, status: "Processing", icon: "🎬", type: "debit", method: "AutoPay" },
            { id: 105, name: "Salary", narration: "NEFT-SALARY-JULY", category: "Salary", date: "2 days ago", fullDate: new Date(Date.now() - 172800000).toLocaleDateString(), time: "10:00 AM", amount: 125000.00, isIncome: true, status: "Completed", icon: "💼", type: "credit", method: "NEFT" },
        ];

        // Generate more mock data for pagination
        const companies = ["Swiggy", "Uber", "Amazon India", "Flipkart", "Starbucks", "Shell Fuel", "Apollo Pharmacy"];
        const categories = ["Food", "Transport", "Shopping", "Shopping", "Food", "Transport", "Health"];

        for (let i = 0; i < 45; i++) {
            const isCredit = Math.random() > 0.8;
            const amount = isCredit ? Math.floor(Math.random() * 20000) + 5000 : Math.floor(Math.random() * 5000) + 100;
            const companyIndex = Math.floor(Math.random() * companies.length);
            const date = new Date(Date.now() - (i + 3) * 86400000); // Days ago

            initialTxns.push({
                id: 200 + i,
                name: isCredit ? "Refund / Transfer" : companies[companyIndex],
                narration: isCredit ? `UPI/REFUND/${10000 + i}` : `UPI/${companyIndex * 1000}/MERCHANT`,
                category: isCredit ? "Refund" : categories[companyIndex],
                date: date.toLocaleDateString(),
                fullDate: date.toLocaleDateString(),
                time: "02:30 PM",
                amount: amount,
                isIncome: isCredit,
                status: "Completed",
                icon: isCredit ? "💰" : "💳",
                type: isCredit ? "credit" : "debit",
                method: "UPI"
            });
        }
        return initialTxns;
    });

    // Budget State
    const [budgets, setBudgets] = useState([
        { id: 1, category: "Shopping", limit: 50000, spent: 35000, icon: "🛍️", color: "#60a5fa" },
        { id: 2, category: "Food & Drink", limit: 15000, spent: 8500, icon: "☕", color: "#f472b6" },
        { id: 3, category: "Utilities", limit: 10000, spent: 6500, icon: "⚡", color: "#fbbf24" },
        { id: 4, category: "Transport", limit: 8000, spent: 3200, icon: "🚗", color: "#4ade80" },
    ]);

    // Notifications
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Transaction Alert", message: "You spent ₹84,900 at Apple Store", type: "alert", read: false },
        { id: 2, title: "Salary Received", message: "You received ₹1,25,000 from Employer", type: "success", read: false }
    ]);

    // Helper to format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Actions
    const addTransaction = (tx) => {
        const newTx = {
            id: Date.now(),
            ...tx,
            date: "Just now",
            fullDate: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: "Completed"
        };

        setTransactions(prev => [newTx, ...prev]);

        if (tx.isIncome) {
            setBalance(prev => prev + tx.amount);
            setNotifications(prev => [{ id: Date.now(), title: "Money Received", message: `You received ${formatCurrency(tx.amount)} from ${tx.name}`, type: "success", read: false }, ...prev]);
        } else {
            setBalance(prev => prev - tx.amount);
            setMonthlySpending(prev => prev + tx.amount);
            setCard(prev => ({ ...prev, spent: prev.spent + tx.amount }));

            // Check budgets
            const budget = budgets.find(b => b.category === tx.category);
            if (budget) {
                const newSpent = budget.spent + tx.amount;
                setBudgets(prev => prev.map(b => b.id === budget.id ? { ...b, spent: newSpent } : b));
                if (newSpent > budget.limit) {
                    setNotifications(prev => [{ id: Date.now() + 1, title: "Budget Exceeded", message: `You have exceeded your ${tx.category} budget!`, type: "alert", read: false }, ...prev]);
                }
            }
        }
    };

    const toggleFreezeCard = () => {
        setCard(prev => ({ ...prev, isFrozen: !prev.isFrozen }));
    };

    const updateBudget = (id, amount) => {
        setBudgets(prev => prev.map(b => b.id === id ? { ...b, limit: amount } : b));
    };

    const updateProfile = (data) => {
        setUser(prev => ({ ...prev, ...data }));
    };

    // Simulate "Live" updates
    useEffect(() => {
        // Investment Updates
        const investmentInterval = setInterval(() => {
            setInvestments(prev => {
                const change = (Math.random() - 0.5) * 500;
                return prev + change;
            });
        }, 3000);

        // Real-Time Transaction Injection (Every 20 seconds)
        const txInterval = setInterval(() => {
            const shouldAddTx = Math.random() > 0.3; // 70% chance to add a tx
            if (shouldAddTx) {
                const isCredit = Math.random() > 0.6; // 40% credit, 60% debit
                const amount = isCredit ? Math.floor(Math.random() * 5000) + 100 : Math.floor(Math.random() * 2000) + 50;
                const companies = ["Swiggy", "Uber", "Zomato", "Jio", "Airtel", "Amazon", "Flipkart"];
                const name = companies[Math.floor(Math.random() * companies.length)];

                const newTx = {
                    id: Date.now(),
                    name: isCredit ? "UPI Receive" : name,
                    narration: `UPI/${Math.floor(Math.random() * 100000)}/${isCredit ? 'SENDER' : 'MERCHANT'}`,
                    category: isCredit ? "Transfer" : "Shopping",
                    date: "Just now",
                    fullDate: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    amount: amount,
                    isIncome: isCredit,
                    status: "Completed",
                    icon: isCredit ? "💰" : "💳",
                    type: isCredit ? "credit" : "debit",
                    method: "UPI"
                };

                setTransactions(prev => [newTx, ...prev]);

                // Update balances
                if (isCredit) {
                    setBalance(prev => prev + amount);
                    setNotifications(prev => [{ id: Date.now(), title: "Money Received", message: `Received ₹${amount}`, type: "success", read: false }, ...prev]);
                } else {
                    setBalance(prev => prev - amount);
                    setMonthlySpending(prev => prev + amount);
                    setCard(prev => ({ ...prev, spent: prev.spent + amount }));
                }
            }
        }, 20000); // 20 seconds

        return () => {
            clearInterval(investmentInterval);
            clearInterval(txInterval);
        };
    }, []);

    return (
        <DashboardContext.Provider value={{
            user, updateProfile,
            balance, fdBalance, rdBalance, investments, monthlySpending,
            card, toggleFreezeCard, setCard,
            transactions, addTransaction,
            budgets, updateBudget,
            notifications,
            formatCurrency
        }}>
            {children}
        </DashboardContext.Provider>
    );
};
