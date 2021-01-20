import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';

type ProductFilterProps = IProductsListState & typeof actionCreators;

export const ProductFilterComponent: React.FC<ProductFilterProps> = ({
    requestProductsFemale,
    requestProductsMale,
    requestProductsAccessories
}) => {
    useEffect(() => {
        requestProductsFemale();
    }, []);

    return <div className="product-filter row">
        <button onClick={requestProductsFemale}>Women's Sale</button>
        <button onClick={requestProductsMale}>Men's Sale</button>
        <button onClick={requestProductsAccessories}>Bags & Accessories Sale</button>
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products.productIDsToProductsMap };
}

export const ProductFilter = connect(mapStateToProps, actionCreators)(ProductFilterComponent as any);