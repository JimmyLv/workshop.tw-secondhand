import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

import './ProductDetailsPage.css';
import { RouteComponentProps } from 'react-router';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import Button from '../../../components/Button/Button';
import { push } from 'react-router-redux';

const ProductDetailsPage = (props: DispatchProp<object> & RouteComponentProps<object>) => {

  return (
    <div>
      <div className="App">
        <p style={{textAlign: 'center'}}>商品详情</p>
      </div>
      <div><ProductDetails/>
        <Button text="立即购买" handleClick={() => props.dispatch(push('/login'))}/>
      </div>
    </div>
  );
};

export default connect()(ProductDetailsPage);
