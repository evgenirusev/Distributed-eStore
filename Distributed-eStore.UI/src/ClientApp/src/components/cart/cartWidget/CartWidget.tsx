import * as React from 'react';
import "./CartWidget.css";

type CartWidgetProps = {
    numberOfItems: number;
};

export const CartWidget: React.FC<CartWidgetProps> = ({
    numberOfItems
}) => {
    return <div className="cart cart-badge badge-icons pull-right">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-primary rounded-x cart-number-of-items">{numberOfItems}</span>
            <div className="badge-open">
        </div>
    </div>
};