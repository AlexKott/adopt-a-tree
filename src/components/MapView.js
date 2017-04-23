import React from 'react';

import config from 'config';

import './mapview.less';

class MapView extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: config.defaultZoom,
      center: this.props.position || config.defaultPosition,
      disableDefaultUI: true
    });
  }

  componentWillReceiveProps(nextProps) {
    const that = this;
    if (nextProps.trees.length !== this.props.markers.length) {
      const markers = [];
      nextProps.trees.forEach(tree => {
        const icon = {
          url: `images/marker-${tree.status}.png`,
          scaledSize: new google.maps.Size(10, 10)
        }
        const marker = new google.maps.Marker({
          position: tree.position,
          map: this.map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          name: tree.name,
          id: tree.id,
          icon
        });
        marker.addListener('click', () => {
          that.props.openTree(marker.id);
        });
        markers.push(marker);
      });
      this.props.saveMarkers(markers);
    }
    if (nextProps.position.lng !== this.props.position.lng || nextProps.position.lat !== this.props.position.lat) {
      this.map.setCenter(nextProps.position);
    }
  }

  componentWillUnmount() {
    this.props.saveMarkers([]);
  }

  render() {
    return (
      <div id="map" className="wrapper" />
    )
  }
}

MapView.displayName = 'MapView';
MapView.propTypes = {};
MapView.defaultProps = {};

export default MapView;
