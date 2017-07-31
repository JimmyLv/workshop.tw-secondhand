import { shallow } from 'enzyme';
import * as React from 'react';
import Logo from './Logo';

it('Logo shallow renders with img', () => {
  const wrapper = shallow(<Logo />);

  expect(wrapper.find('.App-logo').length).toBe(1);
  expect(wrapper.find('img').length).toBe(1);
});
