import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import PostList from './components/PostList/PostList';
import { BlogProvider } from './BlogContext';


function App() {
  return (
    <div className="App">
      <BlogProvider>
        <NavBar />
        <PostList />
      </BlogProvider>
    </div>
  );
}

export default App;

