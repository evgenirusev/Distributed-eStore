import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../../components/ProductList/ProductList';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import "./MaleProductsPage.css";

type MaleProductsPageProps = IProductsListState & typeof actionCreators;

const MaleProductsPage: React.FC<MaleProductsPageProps> = ({
    productIDsToProductsMap,
    currentCategory,
    requestProductsMale
}) => {
    useEffect(() => {
        requestProductsMale();
    }, [requestProductsMale]);

    return <div className="male-products-page">
        <div className="male-products-page__top-image-container"></div>

        {productIDsToProductsMap && <ProductList products={Object.values(productIDsToProductsMap)
            .filter(product => product.category === currentCategory)} />}
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { ...state.products };
}

export default connect(mapStateToProps, actionCreators)(MaleProductsPage as any);