import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { IProductsListState } from '../../state/products/';
import { Product } from '../../components/products/';
import { useEffect } from 'react';
import './ProductList.css';
import { actionCreators as cartActionCreators }  from '../../state/cart/cartActions';

type ProductViewProps = {
    productId: string;
} & typeof cartActionCreators;

const ProductList: React.FC<ProductViewProps> = ({
    
}) => {
    useEffect(() => {
        requestProducts();
    }, [requestProducts]);

    return (
        <section className='product-list' >
            {Object.values(productIDsToProductsMap).map((product, index) => {
                return (
                    <Product key={`product-${index}`} {...product} />
                )
            })}
        </section>
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);