import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { IProductsListState, reducer } from '../../state/products/';
import { actionCreators } from '../../state/products/';
import { Product } from '../../components/products/';
import { useEffect } from 'react';
import './ProductList.css';

type ProductListProps = IProductsListState & typeof actionCreators;

const ProductList: React.FC<ProductListProps> = ({
    requestProducts,
    productIDsToProductsMap
}) => {
    useEffect(() => {
        requestProducts();
    }, [requestProducts]);

    return (
        <section className='product-list' >
            {Object.keys(productIDsToProductsMap).length !== 0 ? Object.values(productIDsToProductsMap).map((product, index) => {
                return (
                    <Product key={`product-${index}`} { ...product } />
                )
            }) : 1}
        </section>
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);