import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import "./ProductFilter.css";

type ProductFilterProps = IProductsListState & typeof actionCreators;

export const ProductFilterComponent: React.FC<ProductFilterProps> = ({
    requestProductsFemale,
    requestProductsMale,
    requestProductsAccessories
}) => {
    useEffect(() => {
        requestProductsFemale();
    }, []);

    return <div className="product-filter d-flex justify-content-center">
        <button className="product-filter__button" onClick={requestProductsFemale}>Women's Sale</button>
        <button className="product-filter__button" onClick={requestProductsMale}>Men's Sale</button>
        <button className="product-filter__button" onClick={requestProductsAccessories}>Bags & Accessories Sale</button>
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products.productIDsToProductsMap };
}

export const ProductFilter = connect(mapStateToProps, actionCreators)(ProductFilterComponent as any);