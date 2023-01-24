import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  } = video;
  //console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={title} src={url} className="ui image" />
      <div className="content">
        <div className="header"> {title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
