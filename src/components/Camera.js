import React from 'react';
import './camera.less';

class Camera extends React.Component {

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video: { width: this.props.width, height: this.props.height, facingMode: { exact: 'environment' }}})
      .then((mediaStream) => {
        this.props.setMediaStream(mediaStream);
        const video = document.querySelector('#camera');
        if ('srcObject' in video) {
          video.srcObject = mediaStream;
        } else {
          video.src = window.URL.createObjectURL(mediaStream);
        }
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <video id="camera" width={this.props.width} height={this.props.height} />
    );
  }
}

Camera.displayName = 'Camera';
Camera.propTypes = {};
Camera.defaultProps = {};

export default Camera;
