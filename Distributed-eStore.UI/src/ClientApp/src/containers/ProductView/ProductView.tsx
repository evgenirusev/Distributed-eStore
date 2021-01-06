import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { useEffect } from 'react';
import './ProductList.css';
import { actionCreators } from '../../state/products/productsActions';
import { IProduct } from '../../state/products';
import { useParams } from 'react-router-dom';

type ParamTypes = {
    productId: string;
}

type ProductViewProps = {
    selectedProductId: string;
    selectedProduct: IProduct;
} & typeof actionCreators;

const ProductView: React.FC<ProductViewProps> = ({
    requestProductById,
    selectedProductId,
    selectedProduct
}) => {
    useEffect(() => {
        let { productId } = useParams<ParamTypes>();
        console.log(productId);

        requestProductById(selectedProductId);
    }, [requestProductById, selectedProductId]);

    return (
        <section className='product-view' >
            { selectedProduct.id }
        </section>
    );
};

export default connect((state: IApplicationState) => state.products.selectedProduct, actionCreators)(ProductView);