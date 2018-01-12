import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import SessionForm from '../session_form';

Enzyme.configure( {adapter: new Adapter()} );

function setup() {
  const props = {
    processForm: jest.fn()
  };

  const enzymeWrapper = mount(<SessionForm {...props} />);

  return {props, enzymeWrapper};
}

describe('Session Form', () => {
  let enzymeWrapper, props;

  beforeEach(() => {
    { enzymeWrapper, props } = setup();
  });

  test('renders', () => {
    expect(enzymeWrapper.find('form').hasClass('login-form-box')).toBe(true);
  });
});
