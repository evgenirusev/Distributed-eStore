import * as React from 'react';
import { ColorSwitcher } from '../';
import './Product.css';

type ProductProps = {
    name: string;
    price: number;
    colors: string[];
    imageURLs: string[];
    selectedColorIndex: number;
};

export const Product: React.FC<ProductProps> = ({
    name,
    price,
    colors,
    imageURLs,
    selectedColorIndex
}) => {
    return <div className="product">
        <a className="product__link" href="#">
            <img sizes="100vw" src={imageURLs[selectedColorIndex]} className="product__image"></img>
            <div className="product__description">
                <p className="product__name"> { name } </p>
                <p className="product__price"> { price } </p>
            </div>
        </a>
        <div className="product__color-switcher">
            <ColorSwitcher colors={colors} selectedColorIndex={selectedColorIndex } />
        </div>
    </div>
};