import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import "./HomePage.css";

type ProductFilterProps = IProductsListState & typeof actionCreators;

export const ProductFilterComponent: React.FC<ProductFilterProps> = ({
    requestProductsMale,
    requestProductsFemale,
    requestProductsAccessories
}) => {
    useEffect(() => {
        requestProductsFemale();
    }, []);

    return <div className="product-filter row">
        <button>Women's Sale</button>
        <button>Men's Sale</button>
        <button>Bags & Accessories Sale</button>
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products };
}

export const ProductFilter = connect(mapStateToProps, actionCreators)(ProductFilterComponent as any);