import * as React from 'react';
import { Route } from 'react-router';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import LoginPage from '../containers/pages/Login/LoginPage';
import HomePage from '../containers/pages/Home/HomePage';
import ProductDetailsPage from '../containers/pages/ProductDetails/ProductDetailsPage';

const router = (
  <div>
    <Route exact={true} path="/" component={HomePage}/>
    <Route path="/about-us" component={AboutUsPage}/>
    <Route path="/product-details" component={ProductDetailsPage}/>
    <Route path="/login" component={LoginPage}/>
  </div>
);

export default router;
