import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../state';
import { reducer } from '../state/products/';
import { actionCreators } from '../state/products/';

type ProductListProps = ReturnType<typeof reducer> & typeof actionCreators;

const ProductList: React.FC<ProductListProps> = ({
    allProducts,
    currentProducts,
    requestAllProducts
}) => {
    useEffect(() => {
        requestAllProducts();
    }, [requestAllProducts]);

    return (
        <section className = 'product-list' >
            {allProducts.map(product => product.name)}
        </section>
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);