import React from 'react';
import { shallow } from 'enzyme';
import Fab from 'components/Fab.js';

describe('<Fab />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Fab />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "fab-component"', function () {
      expect(component.hasClass('fab-component')).to.equal(true);
    });
  });
});
