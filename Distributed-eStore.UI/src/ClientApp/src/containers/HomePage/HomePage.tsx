import * as React from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../../components/ProductList/ProductList';
import { IApplicationState } from '../../state';
import { actionCreators, IProductsListState } from '../../state/products';
import { ProductFilter } from '../ProductFilter/ProductFilter';
import "./HomePage.css";

type HomePageProps = IProductsListState & typeof actionCreators;

export const HomePage: React.FC<HomePageProps> = ({
    productIDsToProductsMap
}) => {
    return <div className="home-page">
        <div className="top-image-container">
            <a href="#" className="home-page__link">
                <h1 className="home-page__text">Just Launched <br /> Summer Products</h1>
                <h3 className="home-page__shop-now">SHOP NOW</h3>
            </a>
        </div>

        <ProductFilter />

        { productIDsToProductsMap && <ProductList products={Object.values(productIDsToProductsMap)} /> }

        <div className="bottom-image-container">
            <a href="#" className="home-page__link">
                <div className="tide-text-container">
                    <h5 className="tide-text-container__text">
                        Every day, 38,356,164 pounds of trash are dumped into our oceans.
                        <br/>Let's turn the tide.
                    </h5>
                    <div className="row">
                        <div className="col-md-4">
                            <span className="tide-text-container__title">
                                We Quit
                            </span><br/>
                            <span>Our plan to remove all single-use plastics from our supply chain.</span>
                        </div>
                        <div className="col-md-4">
                            <span className="tide-text-container__title">
                            Get Dirty & Do Good
                            </span><br />
                            <span>Join us at an upcoming cleanup</span>
                        </div>
                        
                        <div className="col-md-4">
                            <span className="tide-text-container__title">
                            Let's turn the tide
                            </span><br />
                            <span>Our DIY Cleanup Kit includes all the tools you need to organize your own cleanup anytime.</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products };
}

export default connect(mapStateToProps, actionCreators)(HomePage as any);