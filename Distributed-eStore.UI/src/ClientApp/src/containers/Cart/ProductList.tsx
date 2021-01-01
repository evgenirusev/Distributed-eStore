import * as React from 'react';
import { reducer } from '../../state/products/';
import { actionCreators } from '../../state/products/';
import './ProductList.css';

type CartsProps = ReturnType<typeof reducer> & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({ }) => {
    return (
        <section className='cart'></section>
    );
};

// export default connect((state: IApplicationState) => state.products, actionCreators)(Cart);