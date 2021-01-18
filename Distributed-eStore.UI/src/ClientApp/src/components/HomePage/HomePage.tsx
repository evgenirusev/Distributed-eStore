import * as React from 'react';
import "./HomePage.css";

export const HomePage: React.FC = () => {
    return <div className="home-page row">
        <div className="image-container">
            <img className="image-container__image" src="https://i.ibb.co/8xntqgb/Hero-Banner-Template-Reusables-Sale-8c7da083-67c2-4043-b6af-49ed3be027e8-2000x.jpg"></img>
            <h1 className="home-page__text">Just Launched Summer Products</h1>
        </div>
    </div>
};