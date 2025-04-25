import React from 'react';
import './VideoBackground.css';
import video from '../../Assets/video.mp4';

function VideoBackground() {
  return (
    <div className="video-background">
      <video src={video} muted autoPlay loop type="video/mp4" />
      <div className="video-overlay"></div> {/* optional overlay */}
    </div>
  );
}

export default VideoBackground;
