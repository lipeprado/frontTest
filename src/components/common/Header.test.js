import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import Header from './Header';

const wrapper = shallow(<Header />);

describe('<Header/>', () => {
  it('should behave not explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
