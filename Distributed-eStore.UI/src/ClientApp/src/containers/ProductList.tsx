import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../state';
import { reducer } from '../state/products/';
import { actionCreators } from '../state/products/';
import { Product } from '../components/products/';

type ProductListProps = ReturnType<typeof reducer> & typeof actionCreators;

const ProductList: React.FC<ProductListProps> = ({
    products,
    requestProducts
}) => {
    useEffect(() => {
        requestProducts();
    }, [requestProducts]);

    return (
        <section className = 'product-list' >
            {products.map((product) => (
                <Product { ...product } />
            ))}
        </section>
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);