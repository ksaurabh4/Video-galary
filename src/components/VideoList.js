import React from 'react';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component {
  render() {
    const { videos, videoSelected } = this.props;
    const renderVideoList = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          selected={videoSelected}
        />
      );
    });
    return <div className='ui relaxed divided list'>{renderVideoList}</div>;
  }
}
