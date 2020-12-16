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
        <section className = 'section' >
            <div className='container'>
                <h3 className='title is-3'>Hi</h3>
                <div className='box container-box'>
                <h3 className='title is-4'>Here are the names: {allProducts.map(product => product.name)} </h3>
            </div>
        </div>
    </section>
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);