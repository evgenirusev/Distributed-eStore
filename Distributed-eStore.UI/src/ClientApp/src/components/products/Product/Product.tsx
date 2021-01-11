import * as React from 'react';
import { Link } from 'react-router-dom';
import { ColorSwitcher } from '../';
import './Product.css';
import { actionCreators } from "../../../state/products/productsActions";

type ProductProps = {
    id: string;
    name: string;
    price: number;
    colors: string[];
    imageURLs: string[];
    selectedColorIndex: number;
};

export const Product: React.FC<ProductProps> = ({
    id,
    name,
    price,
    colors,
    imageURLs,
    selectedColorIndex
}) => {
    return <div className="product">
        <Link className="product__link" to={`/products/${id}`}>
            <img sizes="100vw" src={imageURLs[selectedColorIndex]} className="product__image"></img>
            <div className="product__description">
                <p className="product__name"> { name } </p>
                <p className="product__price"> { price } </p>
            </div>
        </Link>
        <div className="color-switcher">
            <ColorSwitcher colors={colors} selectedColorIndex={selectedColorIndex} productId={id} selectProductColorAction={actionCreators.selectProductColorFromProductList} />
        </div>
    </div>
};