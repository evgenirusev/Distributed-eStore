import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../state';
import { IProductsListState, reducer } from '../state/products/';
import { actionCreators } from '../state/products/';

type ProductListProps = IProductsListState & typeof actionCreators;

const ProductList: React.FC<ProductListProps> = ({
    allProducts,
    currentProducts,
    requestAllProducts
}) => {
    useEffect(() => {
        requestAllProducts()
    }, [requestAllProducts]);

    return (
        <section className = 'section' >
        <div className='container'>
            <h3 className='title is-3'>Fetch Data</h3>
            <div className='box container-box'>
                <h3 className='title is-4'>Weather forecast</h3>
                <h5 className='subtitle is-5'>
                    This component demonstrates fetching data from the server and working with URL parameters.
          </h5>
            </div>
        </div>
    </section >
    );
};

export default connect((state: IApplicationState) => state.products, actionCreators)(ProductList as any);