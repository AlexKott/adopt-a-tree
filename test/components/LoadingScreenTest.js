import React from 'react';
import { shallow } from 'enzyme';
import LoadingScreen from 'components/LoadingScreen.js';

describe('<LoadingScreen />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<LoadingScreen />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "loadingscreen-component"', function () {
      expect(component.hasClass('loadingscreen-component')).to.equal(true);
    });
  });
});
