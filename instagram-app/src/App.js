import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <main className='feed'>
        {dummyData.map(data => <div key={data.imageUrl}>
          <PostContainer data={data} />
          </div>)}
      </main>
    </div>
  );
}

export default App;
