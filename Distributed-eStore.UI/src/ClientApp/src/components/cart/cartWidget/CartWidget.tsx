import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../state';

type CartWidgetProps = {
    numberOfItems: number;
};

const CartWidgetComponent: React.FC<CartWidgetProps> = ({
    numberOfItems
}) => {
    return <div className="cart-badge badge-icons pull-right">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badge-danger rounded-x">{numberOfItems}</span>
        <div className="badge-open">
        </div>
    </div>
};

const CartWidget = (connect((state: IApplicationState) => {
    return { numberOfItems: state.cart.cartProductIDs.length }
}, null)(CartWidgetComponent));

export default CartWidget;