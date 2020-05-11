import React from 'react';
import './VideoItem.css';

export default class VideoList extends React.Component {
  render() {
    const { video, selected } = this.props;
    return (
      <div onClick={() => selected(video)} className='video-item item'>
        <img
          alt={video.snippet.title}
          className='ui image'
          src={video.snippet.thumbnails.medium.url}
        />
        <div className='content'>
          <div className='header'>{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
