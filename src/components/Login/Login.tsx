import * as React from 'react';
import './Login.css';

interface LoginProps {
  handleSubmit?: Function;
}

const Login = (props: LoginProps) => {
  return (
    <div>

      <p><input type="text" className="input" placeholder="用户名" onChange={() => props.handleSubmit()}/>
      </p>
      <p>
        <input type="text" className="input" placeholder="密码" onChange={() => props.handleSubmit()}/>
      </p>
    </div>
  );
};
export default Login;
