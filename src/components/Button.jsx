import React from 'react';
import { Loader2 } from 'lucide-react';
import '../styles/components.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-highlight)] shadow-[var(--shadow-glow)]',
        secondary: 'bg-[var(--color-secondary)] text-white hover:bg-opacity-90',
        outline: 'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
        ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
        cta: 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-white shadow-lg hover:shadow-[var(--shadow-glow)] transform hover:-translate-y-0.5'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg'
    };

    // Convert custom CSS variables to inline style string or usage in styled-components?
    // Since we are using Vanilla CSS + Utility classes approach (custom), I should map these to standard CSS classes defined in index.css
    // or use inline styles for dynamic variables if needed.
    // Actually, I defined variables in index.css. I will create a CSS module or use styled-jsx?
    // The plan said Vanilla CSS.
    // Let's use a CSS file for Button or inline styles for simplicity in this artifact, OR rely on a utility class approach if I built one.
    // I didn't build a full utility class system in index.css, just variables.
    // So I should write a proper Component CSS or use style objects.

    // Let's use a specific CSS file for components to keep it clean.
    // I'll create Button.css and import it.

    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className} ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
            {children}
        </button>
    );
};

export default Button;
