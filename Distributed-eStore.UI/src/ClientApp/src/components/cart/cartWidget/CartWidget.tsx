import * as React from 'react';
import { store } from '../../..';

export const CartWidget: React.FC = () => {
    return <div className="cart-badge badge-icons pull-right">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge badge-danger rounded-x">{store.getState().cart.cartProductIDs.length}</span>
        <div className="badge-open"></div>
    </div>
};