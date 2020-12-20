import * as React from 'react';
import { ColorSwitcher } from '../';

type ProductProps = {
    name: string;
    price: number;
    colors: string[];
    imageURLs: string[];
};

export const Product: React.FC<ProductProps> = ({
    name,
    price,
    colors,
    imageURLs
}) => {
    return <div className="product">
        <a href="route to /product?id">
            <img sizes="100vw" src="https://i.ibb.co/Bj9gQ40/F20-Accessories-173-800x.jpg" className="product__image"></img>
            <p className="product__name"> { name } </p>
            <p className="product__price"> { price } </p>
        </a>
        <div className="product__color-switcher">
            <ColorSwitcher colors={ colors } />
        </div>
    </div>
};