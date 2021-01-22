import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { useEffect, useState } from 'react';
import './ProductView.css';
import { actionCreators as productsActionCreators } from '../../state/products/productsActions';
import { actionCreators as cartActionCreators } from '../../state/cart/cartActions';
import { useParams } from 'react-router-dom';
import { ColorSwitcher } from '../../components/products';
import { useHistory } from "react-router-dom";
import { IProductsListState } from '../../state/products';

type ParamTypes = {
    productId: string;
}

type ProductViewProps = {
    products: IProductsListState;
} & typeof productsActionCreators & typeof cartActionCreators;

const ProductView: React.FC<ProductViewProps> = ({
    requestProductById,
    addProductToCart,
    products
}) => {
    const history = useHistory();
    const { productId } = useParams<ParamTypes>();
    const sizesList = ["6", "7", "8", "9", "10"];
    const [selectedSize, selectSizeIndex] = useState(sizesList[0]);

    useEffect(() => {
        requestProductById(productId);
    }, [requestProductById, productId]);


    const product = products.productIDsToProductsMap[productId];

    if (product) {
        const { imageURLs, colors, description, name, price, selectedColorIndex } = product;

        const onAddToCart = () => {
            addProductToCart({
                id: productId,
                name,
                price,
                color: colors[selectedColorIndex],
                imageURL: imageURLs[selectedColorIndex],
                quantity: 1,
                size: selectedSize
            });

            history.push("/cart");
        }

        return (<section className='product-view row'>
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
                                productId={productId}
                                selectProductColorAction={productsActionCreators.selectProductColor} />
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
                        <div className="product-view__button-container">
                            <button className="cart-products__button" onClick={onAddToCart}>ADD TO CART</button>
                        </div>
                        <div className="product-view__details">
                            <p>Details:</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </section>)
    }

    return <></>;
};

const mapStateToProps = (state: IApplicationState) => {
    return { products: state.products };
}

export default connect(mapStateToProps, { ...productsActionCreators, ...cartActionCreators })(ProductView as any);