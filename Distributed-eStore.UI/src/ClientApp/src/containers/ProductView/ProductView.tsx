import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state';
import { useEffect } from 'react';
import './ProductView.css';
import { actionCreators } from '../../state/products/productsActions';
import { IProduct } from '../../state/products';
import { useParams } from 'react-router-dom';

type ParamTypes = {
    productId: string;
}

type ProductViewProps = {
    selectedProduct: IProduct;
} & typeof actionCreators;

const ProductView: React.FC<ProductViewProps> = ({
    requestProductById,
    selectedProduct
}) => {
    const { productId } = useParams<ParamTypes>();

    useEffect(() => {
        requestProductById(productId);
    }, [requestProductById, productId]);

    return (
        <section className='product-view' >
            
        </section>
    );
};

const mapStateToProps = (state: IApplicationState) => {
    return { selectedProduct: state.products.selectedProduct };
}

export default connect(mapStateToProps, actionCreators)(ProductView);