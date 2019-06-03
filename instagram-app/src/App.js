import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      {dummyData.map(data => <div key={data.imageUrl}>
        <PostContainer data={data} />
        </div>)}
    </div>
  );
}

export default App;
