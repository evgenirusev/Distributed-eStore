import * as React from 'react';
import { reducer as cartReducer } from '../../state/cart/cartReducers';
import { reducer as productsReducer } from '../../state/products/productsReducers';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';

type CartsProps = ReturnType<typeof cartReducer> & ReturnType<typeof productsReducer> & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    productIDsToProductsMap,
    cartProductIDs = [],
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    placeOrder
}) => {
    return (
        <section className='cart'>
            <div>{cartProductIDs.map((id, index) => {
                const product = productIDsToProductsMap[id];
                const props = {
                    key: index,
                    id: product.id,
                    name: product.name,
                    color: product.imageURLs[product.selectedColorIndex],
                    price: product.price,
                    imageURL: product.imageURLs[product.selectedColorIndex]
                }

                return <CartProduct {...props} />
            })}</div>
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);