import * as React from 'react';
import "./HomePage.css";

export const HomePage: React.FC = () => {
    return <div className="home-page">
        <div className="image-container">
            <img className="image-container__image" src="https://i.ibb.co/8xntqgb/Hero-Banner-Template-Reusables-Sale-8c7da083-67c2-4043-b6af-49ed3be027e8-2000x.jpg"></img>
            <a href="#" className="home-page__link">
                <h1 className="home-page__text">Just Launched <br /> Summer Products</h1>
                <h3 className="home-page__shop-now">SHOP NOW</h3>
            </a>
        </div>
        <div className="image-container">
            <img className="image-container__image" src="https://i.ibb.co/CJvn0dw/waves.jpg"></img>
            <a href="#" className="home-page__link">
                <div className="return-the-tide-text-container">
                    <h5 className="return-the-tide-text-container__text">
                        Every day, 38,356,164 pounds of trash are dumped into our oceans.
                        <br/>Let’s turn the tide.
                    </h5>
                    <div className="row">
                        <div className="col-md-4">fasd asdf asd fasdf</div>
                        <div className="col-md-4">askhdgjf</div>
                        <div className="col-md-4">sdasd</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
};