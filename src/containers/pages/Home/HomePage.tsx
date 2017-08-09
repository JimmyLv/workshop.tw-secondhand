import Button from 'antd-mobile/es/button/index.web';
import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import * as Components from '../../../components';
import * as D from '../../../definitions';
import './HomePage.css';

type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
};

const HomePage = (props: HomePageProps<object>) => {
  const { dispatch, user } = props;
  return (
    <div className="App">
      <div className="App-header">
        <Components.Logo />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>{user.name ? `User Name: ${user.name}` : 'No User Name.'}</p>

      <button onClick={() => dispatch(push(('login')))}>
        Login and get User Name
      </button>
      <p>
        <button onClick={() => dispatch(push('about-us'))}>Go to About Us</button>
        <Button type="primary" onClick={() => alert('HelloWorld!')}>Click me!</Button>
        <Button onClick={() => dispatch(push('my-product'))}>go to my product</Button>
        <Button onClick={() => dispatch(push('upload-product'))}>upload product</Button>
      </p>
    </div>
  );
};

export default connect(
  (state: D.RootState<object>) => ({ user: state.user }),
)(HomePage);
