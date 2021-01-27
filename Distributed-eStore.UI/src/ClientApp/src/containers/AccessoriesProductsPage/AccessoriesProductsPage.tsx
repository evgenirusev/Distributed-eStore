import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../../components/ProductList/ProductList';
import { IApplicationState } from '../../state/index';
import { actionCreators } from '../../state/products/productsActions';
import { IProductsListState } from '../../state/Products/productsTypes';
import "./AccessoriesProductsPage.css";

type AccessoriesProductsPageProps = IProductsListState & typeof actionCreators;

const AccessoriesProductsPage: React.FC<AccessoriesProductsPageProps> = ({
    productIDsToProductsMap,
    currentCategory,
    requestProductsAccessories
}) => {
    useEffect(() => {
        requestProductsAccessories();
    }, [requestProductsAccessories]);

    return <div className="accessories-products-page">
        <div className="accessories-products-page__top-image-container"></div>

        {productIDsToProductsMap && <ProductList products={Object.values(productIDsToProductsMap)
            .filter(product => product.category === currentCategory)} />}
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { ...state.products };
}

export default connect(mapStateToProps, actionCreators)(AccessoriesProductsPage as any);