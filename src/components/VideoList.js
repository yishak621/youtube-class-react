import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  //props.videos we can use props but also
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
//FROM THE PARENT to THE CHILD
//notice that we passed down the onVideoSelect prop from the App to the videoLst and then to Videoitem
//but if we want to pass function from the child to the parent we use callback
