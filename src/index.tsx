import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.less';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
  require('./apis/mocks');
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
