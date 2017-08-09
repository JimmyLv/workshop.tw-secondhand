import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';

import './ProductDetailsPage.css';
import {RouteComponentProps} from 'react-router';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import Button from '../../../components/Button/Button';
import {push} from 'react-router-redux';
import Header from '../../../components/Header/Header';
// import {NavTab} from "../../../components/Footer/NavTab";

const info = {
  model: '520P13C',
  specifications: '520T1(六款)',
  wheel: 'EVA发泡',
  name: '婴儿车',
  material: '铝合金',
  owner: 'Siyu',
  age: '新生 1个月~4个月',
  weight: '15 kg',
  price: '450.20',
  img: 'https://gd1.alicdn.com/imgextra/i3/1023624380/TB2CcdWdCBjpuFjSsplXXa5MVXa_!!1023624380.png'
};

const ProductDetailsPage = (props: DispatchProp<object> & RouteComponentProps<object>) => {

  return (
    <div>
      <Header text="商品详情"/>
      <div><ProductDetails
        name={info.name}
        img={info.img}
        price={info.price}
        owner={info.owner}
        info={info}
      />
        <Button text="立即购买" handleClick={() => props.dispatch(push('/login'))}/>
      </div>
      {/*<NavTab/>*/}
    </div>

  );
};

export default connect()(ProductDetailsPage);
