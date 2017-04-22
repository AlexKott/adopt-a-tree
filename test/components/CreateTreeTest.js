import React from 'react';
import { shallow } from 'enzyme';
import CreateTree from 'components/CreateTree.js';

describe('<CreateTree />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<CreateTree />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "createtree-component"', function () {
      expect(component.hasClass('createtree-component')).to.equal(true);
    });
  });
});
