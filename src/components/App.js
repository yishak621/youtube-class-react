import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }; //since we want an array we initalize it as []
  //when a app opens first time we want a default videos appear in the screen
  componentDidMount() {
    this.onTermSubmit('trending');
  }
  //callback that use the input.value[term]--by the way when we refer a prop it doesnt have to be identical to the callback name
  onTermSubmit = async (term) => {
    //console.log(term); //to link the term with the input.value we use this callback in searchbaar.js
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    //setstate[we update both video lists and one selected video as a default]
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  //callback when a video is clicked
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  //<!--TODO: when we hit the submit - the axios.create method will add baseURL+part+maxresult+KEY+q
  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyAonNq5vlsUeTfaln9jroeg7HGticXs7mc&q=mia
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {' '}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
