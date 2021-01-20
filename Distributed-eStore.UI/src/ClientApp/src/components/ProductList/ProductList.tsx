import * as React from 'react';
import { IProduct } from '../../state/products/';
import { Product } from '../../components/products/Product/Product';
import './ProductList.css';

type ProductListProps = {
    products: IProduct[]
};

export const ProductList: React.FC<ProductListProps> = ({
    products
}) => {
    return (
        <section className='product-list' >
            {products.map((product: IProduct, index: number) => {
                return (
                    <Product key={`product-${index}`} { ...product } />
                )
            })}
        </section>
    );
};