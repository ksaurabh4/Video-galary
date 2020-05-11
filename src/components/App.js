import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('Recent News');
  }

  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyDFuHSlpNpbupYojiT6ftM8IgdYFEMQe-8';
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`,
      },
    });
    const index = Math.floor(Math.random() * this.state.videos.length);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[index],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                videoSelected={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
