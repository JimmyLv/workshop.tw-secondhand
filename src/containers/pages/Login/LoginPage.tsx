import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

const LoginPage = (props: DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <h2>Login</h2>

  </div>
);

export default connect()(LoginPage);
