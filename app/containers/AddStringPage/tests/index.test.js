import React from 'react';
import { shallow } from 'enzyme';

import { AddStringPage } from '../index';
import AddStringButton from '../AddStringButton';

xdescribe('<AddStringPage />', () => {
  it('renders the add button', () => {
    const renderedComponent = shallow(<AddStringPage />);
    console.log(renderedComponent);
    expect(renderedComponent.contains(<AddStringButton />).node).toBeDefined();
  });

  it('renders the input field', () => {});
});
