import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ProductList from './containers/ProductList/ProductList';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Cart from './containers/Cart/Cart';

export default () => (
    <Layout>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/products/cart' component={Cart} />
    </Layout>
);