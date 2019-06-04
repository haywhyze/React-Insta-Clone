import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dummyData,
    }
  }

  render () {
    return (
    <div>
      <SearchBar />
      <main className='feed'>
        {this.state.data.map(data => <div key={data.imageUrl}>
          <PostContainer data={data} />
          </div>)}
      </main>
    </div>
  );
  }
}

export default App;
