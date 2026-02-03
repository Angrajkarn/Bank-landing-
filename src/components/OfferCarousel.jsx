import React from 'react';
import Button from './Button';
import '../styles/components.css';

const OfferCarousel = () => {
    return (
        <section style={{
            background: 'linear-gradient(to right, #003366, #00509e)',
            color: 'white',
            padding: '4rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="section-wrapper" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                {/* Left Content */}
                <div style={{ flex: '1 1 400px', zIndex: 2 }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        lineHeight: '1.1',
                        fontWeight: '800',
                        marginBottom: '1.5rem'
                    }}>
                        Exclusive deals, <br />
                        cashback and <br />
                        discounts for you!
                    </h2>
                    <Button variant="outline" size="lg" style={{
                        background: 'white',
                        color: '#003366',
                        borderColor: 'white',
                        fontWeight: '600'
                    }}>
                        Explore Offers &gt;
                    </Button>
                </div>

                {/* Right Image */}
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <img
                        src="/assets/offers_hero.png"
                        alt="Offers and Deals"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default OfferCarousel;
