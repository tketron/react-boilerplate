import React from 'react';
import { shallow } from 'enzyme';

import AddStringButton from '../AddStringButton';

describe('<AddStringButton />', () => {
  it('renders a button', () => {
    const renderedComponent = shallow(<AddStringButton />);
    expect(renderedComponent.find('button').getElement()).toBeDefined();
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<AddStringButton onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
