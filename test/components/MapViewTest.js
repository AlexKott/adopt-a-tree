import React from 'react';
import { shallow } from 'enzyme';
import MapView from 'components/MapView.js';

describe('<MapView />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MapView />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "mapview-component"', function () {
      expect(component.hasClass('mapview-component')).to.equal(true);
    });
  });
});
