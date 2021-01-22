import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Cart from './containers/Cart/Cart';
import ProductView from './containers/ProductView/ProductView';
import Logout from './components/user/Logout';
import HomePage from './containers/HomePage/HomePage';
import FemaleProductsPage from './containers/FemaleProductsPage/FemaleProductsPage';
import MaleProductsPage from './containers/MaleProductsPage/MaleProductsPage';
import AccessoriesProductsPage from './containers/AccessoriesProductsPage/AccessoriesProductsPage';

export default () => (
    <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/products/:productId' component={ProductView} />
        <Route exact path='/products/womens' component={FemaleProductsPage} />
        <Route exact path='/products/mens' component={MaleProductsPage} />
        <Route exact path='/products/accessories' component={AccessoriesProductsPage} />
    </Layout>
);