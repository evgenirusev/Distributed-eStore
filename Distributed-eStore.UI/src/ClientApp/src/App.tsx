import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ProductList from './containers/ProductList';

export default () => (
    <Layout>
        <Route exact path='/' component={ProductList} />
    </Layout>
);
