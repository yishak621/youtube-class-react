import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  //declaration
  const {
    snippet: { title, description },
    id: { videoId },
  } = video;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="videoplayer" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
