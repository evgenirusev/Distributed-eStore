import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../../components/ProductList/ProductList';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import "./FemaleProductsPage.css";

type FemaleProductsPageProps = IProductsListState & typeof actionCreators;

const FemaleProductsPage: React.FC<FemaleProductsPageProps> = ({
    productIDsToProductsMap,
    currentCategory,
    requestProductsFemale
}) => {
    useEffect(() => {
        requestProductsFemale();
    }, [requestProductsFemale]);

    return <div className="female-products-page">
        <div className="female-products-page__top-image-container"></div>

        {productIDsToProductsMap && <ProductList products={Object.values(productIDsToProductsMap)
            .filter(product => product.category === currentCategory)} />}
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { ...state.products };
}

export default connect(mapStateToProps, actionCreators)(FemaleProductsPage as any);