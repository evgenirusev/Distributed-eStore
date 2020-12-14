import * as React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { IApplicationState } from '../state';
import { reducer } from '../state/products/';
import { actionCreators } from '../state/products/';

export type DefaultColumnProps = {
    value: string,
    modifier?: string
};

type ProductListProps = ReturnType<typeof reducer> & typeof actionCreators & { actionToUse: string };

// destructure is optional { currentProducts, requestAllProducts, actionToUse }
const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
    useEffect(() => {
        // todo: handle API call
    }, []);

    return (
        <section className='productlist'>
            { props.currentProducts.map(product => {
                return `<div>${product.id}</div>`;
            })}
        </section>
    );
};

const mapStateToProps = (state: IApplicationState) => state.products?.currentProducts;

export default connect(mapStateToProps, actionCreators)(ProductList);