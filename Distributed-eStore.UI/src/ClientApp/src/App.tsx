import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ProductList from './containers/ProductList/ProductList';
import Register from './containers/Register';

export default () => (
    <Layout>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/register' component={Register} />
    </Layout>
);