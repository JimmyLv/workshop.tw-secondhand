import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import {storiesOf} from '@storybook/react'
import {Welcome} from '@storybook/react/demo'
import Button from 'antd-mobile/es/button/index.web';
import NavBar from 'antd-mobile/es/nav-bar/index.web'
import Icon from 'antd-mobile/es/icon/index.web'
import 'antd-mobile/dist/antd-mobile.css'

import Card from 'antd-mobile/es/card/index.web'
import React from 'react'

import Logo from '../src/components/Logo/Logo'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with AddProduct', () => <Button type={'warning'} size={'small'} onClick={() => alert('HelloWorld!')}>Add
    Product</Button>)

storiesOf('Image', module)
  .add('with Logo', () => <Logo/>)
  .add('with Card', () => <Card>
    <Card.Header
      title="This is title"
      thumb="https://blog.jimmylv.info/public/img/%E5%89%8D%E7%AB%AF.svg"
      extra={<span>this is extra</span>}
    />
    <Card.Body>
      <div>This is content of `Card`</div>
    </Card.Body>
    <Card.Footer content="footer content" extra={<div>extra footer content</div>}/>
  </Card>)
storiesOf('NavBar', module)
  .add('with Logo', () => <NavBar leftContent="back"
                                  mode="light"
                                  onLeftClick={() => console.log('onLeftClick')}
                                  rightContent={[
                                    <Icon key="0" type="search" style={{marginRight: '0.32rem'}}/>,
                                    <Icon key="1" type="ellipsis"/>,
                                  ]}
  >NavBar</NavBar>)
