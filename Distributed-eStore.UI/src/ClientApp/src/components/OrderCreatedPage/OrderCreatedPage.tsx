import * as React from 'react';
import './OrderCreatedPage';

export const OrderCreatedPage: React.FC = () => {
    return (
        <div className="card">
            <div className="cart__checkmark-container">
                <i className="checkmark">✓</i>
            </div>
            <h1>Success</h1>
            <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
        </div>
    );
};