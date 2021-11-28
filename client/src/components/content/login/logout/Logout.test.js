import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Logout from './index';

describe('Logout', () => {
  it('should render correctly', () => {
    const output = shallow(<Logout logout={() => 'simulated logout'} />);
    expect(shallowToJson(output)).toMatchSnapshot();
    output.find('[role="button"]').simulate('click');
    expect(output).toMatchSnapshot();
  });
});
