import * as React from 'react';

export const OrderCreatedPage: React.FC = () => {
    return (<div className="container" style={{ padding: "100px" }}>
        <div className="text-center">
            <br /><br /> <h2 style={{ color:"#0fad00" }}>Success</h2>
            <h4>Your order was created.</h4>
            <a href="/" className="btn btn-success">Browse Products</a>
        </div>
    </div>
    );
};