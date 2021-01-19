import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/';
import { IProductsListState } from '../../state/products/';
import { actionCreators } from '../../state/products/';
import { Product } from '../../components/products/Product/Product';
import { useEffect } from 'react';
import './ProductList.css';

type ProductListProps = IProductsListState & typeof actionCreators;

const ProductListComponent: React.FC<ProductListProps> = ({
    requestProducts,
    productIDsToProductsMap
}) => {
    useEffect(() => {
        requestProducts();
    }, [requestProducts]);

    return (
        <section className='product-list' >
            {Object.values(productIDsToProductsMap).map((product, index) => {
                return (
                    <Product key={`product-${index}`} { ...product } />
                )
            })}
        </section>
    );
};

export const ProductList = connect((state: IApplicationState) => state.products, actionCreators)(ProductListComponent);