import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

console.log(dummyData);

function App() {
  return (
    <div>
      {dummyData.map(data => <div key={data.imageUrl}>
        <PostContainer data={data} />
        </div>)}
    </div>
  );
}

export default App;
