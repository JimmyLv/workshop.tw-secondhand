import * as React from 'react';

import './ProductDetails.css';
import Flex from 'antd-mobile/es/flex/index.web';
import WhiteSpace from 'antd-mobile/es/white-space/index.web';

const buyerIcon = require('../../resources/buyer.svg');

const info = {
  model: '520P13C',
  specifications: '520T1(六款)',
  wheel: 'EVA发泡',
  name: '婴儿车',
  material: '铝合金',
  owner: 'Siyu',
  age: '新生 1个月~4个月',
  weight: '15 kg',
  price: 450.20,
};
const imgPath = 'https://gd1.alicdn.com/imgextra/i3/1023624380/TB2CcdWdCBjpuFjSsplXXa5MVXa_!!1023624380.png';
const ProductDetails = () => {
  return (
    <div>
      <div>
        <Flex>
          <Flex.Item>
            <div className="product-img">
              <img src={imgPath} height="150px" width="150px"/>
            </div>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="xs"/></div>
      <p className="left-box"> {info.name}</p>
      <p className="right-box">￥ {info.price}
        <br/>
        <span className="buyerIcon">
            <img width="20px" height="20px" src={buyerIcon} alt="buyer"/>
          {info.owner}
        </span>
      </p>
      <div className="description">
        <p><span>产品型号：</span> {info.model}</p>
        <p>规格型号： {info.specifications}</p>
        <p>车轮类型： {info.wheel}</p>
        <p>车架材质： {info.material}</p>
        <p>适用年龄：{info.age}</p>
        <p>承受重： {info.weight}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
