import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { useEffect, useState } from 'react';
import './ProductView.css';
import { actionCreators as productsActionCreators } from '../../state/products/productsActions';
import { actionCreators as cartActionCreators } from '../../state/cart/cartActions';
import { IProduct } from '../../state/products';
import { useParams } from 'react-router-dom';
import { ColorSwitcher } from '../../components/products';
import { useHistory } from "react-router-dom";

type ParamTypes = {
    productId: string;
}

type ProductViewProps = {
    selectedProduct: IProduct;
} & typeof productsActionCreators & typeof cartActionCreators;

const ProductView: React.FC<ProductViewProps> = ({
    requestProductById,
    selectedProduct,
    addProductToCart
}) => {
    const { id, imageURLs, colors, description, name, price, selectedColorIndex } = selectedProduct;
    const { productId } = useParams<ParamTypes>();
    const isObjectEmpty = (obj: Object) => Object.keys(obj).length === 0

    const sizesList = [6, 7, 8, 9, 10];
    const [selectedSize, selectSizeIndex] = useState(sizesList[0]);

    const history = useHistory();
    const onAddToCart = () => {
        addProductToCart({
            id,
            name,
            price,
            color: colors[selectedColorIndex],
            imageURL: imageURLs[selectedColorIndex]
        });

        history.push("/cart");
    }

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
                    <hr />
                    <div className="color-switcher">
                        <p>Color:</p>
                        <ColorSwitcher colors={colors}
                            selectedColorIndex={selectedColorIndex}
                            productId={id}
                            selectProductColorAction={productsActionCreators.selectProductColorFromProductView} />
                    </div>
                    <div className="product-view__size-selector">
                        <p>Size<span className="product-view__size-tag">Just a few left</span></p>
                        {sizesList.map((size, index) =>
                            <button type="button"
                                className={`product-view__value-selector ${size === selectedSize && 'product-view__value-selector--selected'}`}
                                onClick={() => { selectSizeIndex(size) }}
                                key={`size-${index}`}
                            >{size}</button>
                        )}
                    </div>
                    <button className="product-view__add-to-cart-button" onClick={onAddToCart}>ADD TO CART</button>
                    <div className="product-view__details">
                        <p>Details</p>
                        <p>{ description }</p>
                    </div>
                </div>
            </section>
    );
};

const mapStateToProps = (state: IApplicationState) => {
    return { selectedProduct: state.products.selectedProduct };
}

export default connect(mapStateToProps, { ...productsActionCreators, ...cartActionCreators })(ProductView as any);