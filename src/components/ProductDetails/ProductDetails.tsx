import * as React from 'react';

import './ProductDetails.css';
import Flex from 'antd-mobile/es/flex/index.web';
import WhiteSpace from 'antd-mobile/es/white-space/index.web';
const buyerIcon = require('../../resources/buyer.svg');

interface ProductDetailProps {
  img?: string;
  price?: string;
  name?: string;
  owner?: string;
  info?: {
    model?: string;
    specifications?: string;
    material?: string;
    wheel?: string;
    age?: string;
    weight?: string;
  };
}
const ProductDetails = (props: ProductDetailProps) => {
  return (
    <div>
      <div>
        <Flex>
          <Flex.Item>
            <div className="product-img">
              <img src={props.img} height="150px" width="150px"/>
            </div>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="xs"/></div>
      <p className="left-box"> {props.name}</p>
      <p className="right-box">￥ {props.price}
        <br/>
        <span className="buyerIcon">
            <img width="20px" height="20px" src={buyerIcon} alt="buyer"/>
          {props.owner}
        </span>
      </p>
      <div className="description">
        <p><span>产品型号：</span> {props.info.model}</p>
        <p>规格型号： {props.info.specifications}</p>
        <p>车轮类型： {props.info.wheel}</p>
        <p>车架材质： {props.info.material}</p>
        <p>适用年龄：{props.info.age}</p>
        <p>承受重： {props.info.weight}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
