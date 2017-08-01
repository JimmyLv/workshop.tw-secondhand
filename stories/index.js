import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { storiesOf } from '@storybook/react'
import { Welcome } from '@storybook/react/demo'
import Button from 'antd-mobile/lib/button/index.web'
import React from 'react'
import Logo from '../src/components/Logo/Logo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with Logo', () => <Button onClick={action('clicked')}><Logo /></Button>)
