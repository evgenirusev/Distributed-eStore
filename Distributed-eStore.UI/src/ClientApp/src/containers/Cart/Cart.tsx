import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { actionCreators as productActionCreators } from '../../state/products/productsActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { useEffect } from 'react';

// technical debt - shouldn't have product action creators here.
type CartsProps = IApplicationState & typeof actionCreators & typeof productActionCreators;

const Cart: React.FC<CartsProps> = ({
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    placeOrder,
    products,
    cart,
    requestProducts
}) => {
    // technical debt - reuse this hook 
    useEffect(() => {
        requestProducts();
    }, [requestProducts]);

    return (
        <section className='cart'>
            <div>{cart.cartProductIDs.length > 0 ? cart.cartProductIDs.map((id, index) => {
                const product = products.productIDsToProductsMap[id];

                const props = {
                    key: index,
                    id: product.id,
                    name: product.name,
                    color: product.imageURLs[product.selectedColorIndex],
                    price: product.price,
                    imageURL: product.imageURLs[product.selectedColorIndex]
                }

                return <CartProduct {...props} />
            }) : <div className="cart__message">your cart is empty</div>}</div>
        </section>
    );
};

export default connect((state: IApplicationState) => state, { ...actionCreators, ...productActionCreators })(Cart);