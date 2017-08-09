import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {push} from 'react-router-redux';
import NavBar from "antd-mobile/es/nav-bar/index.web";

import {Product} from '../../../definitions'
import {NavTab} from "components/Footer/NavTab";
import {ProductList} from "../../../components/Product/ProductList";

export interface MyProductPageProps {
  products: Product[];
}

const SaleProductPage = (props: MyProductPageProps & DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <NavBar mode="light"
            leftContent={<text>back</text>}
            onLeftClick={() => props.dispatch(push('/'))}>出售宝贝</NavBar>

    <ProductList items={props.products}></ProductList>
    <NavTab/>
  </div>
);

export default connect(
  (state) => ({
    products: state.products || [{img: 'file:///image.png', name: '照相机', price: '100', status: '已售出', details: '张三123'}]
  })
)(SaleProductPage);
