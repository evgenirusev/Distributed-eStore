import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProductCategories } from '../../constants';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import "./ProductFilter.css";

type ProductFilterProps = IProductsListState & typeof actionCreators;

export const ProductFilterComponent: React.FC<ProductFilterProps> = ({
    requestProductsFemale,
    requestProductsMale,
    requestProductsAccessories,
    currentCategory
}) => {

    useEffect(() => {
        requestProductsFemale();
    }, [requestProductsFemale]);

    const categoriesMap = {
        [ProductCategories.FEMALE]: { requestProducts: requestProductsFemale, text: "Women's Sale" },
        [ProductCategories.MALE]: { requestProducts: requestProductsMale, text: "Men's Sale" },
        [ProductCategories.ACCESSORIES]: { requestProducts: requestProductsAccessories, text: "Bags & Accessories Sale" }
    }

    return <div className="product-filter d-flex justify-content-center">
        {
            Object.keys(categoriesMap).map((category, index) => {
                const text = categoriesMap[category].text;
                const requestProducts = categoriesMap[category].requestProducts;

                const cssClass = `product-filter__button ${category === currentCategory ? "product-filter__button--isSelected" : ""}`;

                return <button key={`${category}-${index}`} className={cssClass} onClick={requestProducts}>{text}</button>
            })
        }
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products.productIDsToProductsMap, currentCategory: state.products.currentCategory };
}

export const ProductFilter = connect(mapStateToProps, actionCreators)(ProductFilterComponent as any);