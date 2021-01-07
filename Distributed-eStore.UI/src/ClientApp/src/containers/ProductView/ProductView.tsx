import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { useEffect } from 'react';
import './ProductView.css';
import { actionCreators } from '../../state/products/productsActions';
import { IProduct } from '../../state/products';
import { useParams } from 'react-router-dom';
import { ColorSwitcher } from '../../components/products';

type ParamTypes = {
    productId: string;
}

type ProductViewProps = {
    selectedProduct: IProduct;
} & typeof actionCreators;

const isObjectEmpty = (obj: Object) => Object.keys(obj).length === 0

const ProductView: React.FC<ProductViewProps> = ({
    requestProductById,
    selectProductColor,
    selectedProduct
}) => {
    const { id, imageURLs, colors, description, name, price, selectedColorIndex } = selectedProduct;
    const { productId } = useParams<ParamTypes>();

    useEffect(() => {
        requestProductById(productId);
    }, [requestProductById, productId]);


    return (
        isObjectEmpty(selectedProduct)
            ? <></> // open for extension - implement loading logic here
            : <section className='product-view row'>
                <div className="product-view__image-container col-sm-6 col-lg-7">
                    <img sizes="100vw" src={imageURLs[selectedColorIndex]} className="product-view__image w-100"></img>
                </div>
                <div className="product-view__description product-info col-sm-6 col-lg-5">
                    <h1 className="product-view__name">{name}</h1>
                    <div>${price}</div>
                </div>
                <div className="product__color-switcher">
                    <ColorSwitcher colors={colors} selectedColorIndex={selectedColorIndex} productId={id} />
                </div>
            </section>
    );
};

const mapStateToProps = (state: IApplicationState) => {
    return { selectedProduct: state.products.selectedProduct };
}

export default connect(mapStateToProps, actionCreators)(ProductView);