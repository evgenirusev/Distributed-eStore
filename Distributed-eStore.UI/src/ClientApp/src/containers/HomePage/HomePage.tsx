import * as React from 'react';
import { connect } from 'react-redux';
import { BottomBanner } from '../../components/BottomBanner/BottomBanner';
import { ProductList } from '../../components/ProductList/ProductList';
import { IApplicationState } from '../../state/index';
import { actionCreators } from '../../state/products/productsActions';
import { IProductsListState } from '../../state/products/productsTypes';
import { ProductFilter } from '../ProductFilter/ProductFilter';
import "./HomePage.css";

type HomePageProps = IProductsListState & typeof actionCreators;

const HomePage: React.FC<HomePageProps> = ({
    productIDsToProductsMap,
    currentCategory
}) => {
    return <div className="home-page">
        <div className="home-page__top-image-container">
            <a href="#" className="home-page__link">
                <h1 className="home-page__text">Just Launched <br /> Summer Products</h1>
                <h3 className="home-page__shop-now">SHOP NOW</h3>
            </a>
        </div>

        <ProductFilter />

        {productIDsToProductsMap && <ProductList products={Object.values(productIDsToProductsMap)
            .filter(product => product.category === currentCategory)} />}

        <BottomBanner/>
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { ...state.products };
}

export default connect(mapStateToProps, actionCreators)(HomePage as any);