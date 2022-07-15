import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './components/Content';
import Searchbar from './components/Searchbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Searchbar />
    <Content />
  </React.StrictMode>
);
