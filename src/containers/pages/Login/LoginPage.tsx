import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Login from '../../../components/Login/Login';

const buyerIcon = require('../../../resources/buyer.svg');
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import { push } from 'react-router-redux';

const LoginPage = (props: DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <Header text="请登录"/>
    <div className="product-img">
      <img src={buyerIcon} height="150px" width="150px"/>
    </div>
    <Login/>

    <p><Button text="登陆" handleClick={() => props.dispatch(push('/login'))}/>
    </p><p>
    <Button text="免费注册" handleClick={() => props.dispatch(push('/'))}/></p>
  </div>
);

export default connect()(LoginPage);
