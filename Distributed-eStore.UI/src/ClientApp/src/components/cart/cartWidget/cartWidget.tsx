import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../state';

type CartWidgetProps = {
    numberOfItems: number;
};

export const CartWidget: React.FC<CartWidgetProps> = ({
    numberOfItems
}) => {
    return <div className="cart-badge badge-icons pull-right">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger rounded-x">{ numberOfItems }</span>
            <div className="badge-open">
        </div>
    </div>
};

export default connect((state: IApplicationState) => {
    return { numberOfItems: state.cart.cartProductIDs.length }
}, null)(CartWidget);