import * as React from 'react';
import { reducer as cartReducer } from '../../state/cart/cartReducers';
import { reducer as productsReducer } from '../../state/products/productsReducers';
import { actionCreators } from '../../state/cart/cartActions';
import './ProductList.css';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';

type CartsProps = ReturnType<typeof cartReducer> & ReturnType<typeof productsReducer> & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    productIDsToProductsMap,
    cartProductIDs,
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    placeOrder
}) => {
    return (
        <section className='cart'>
            <div>{cartProductIDs.map(id => { productIDsToProductsMap. }) }</div>
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart);