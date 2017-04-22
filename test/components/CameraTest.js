import React from 'react';
import { shallow } from 'enzyme';
import Camera from 'components/Camera.js';

describe('<Camera />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Camera />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "camera-component"', function () {
      expect(component.hasClass('camera-component')).to.equal(true);
    });
  });
});
