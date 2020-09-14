import React from 'react';
import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from "react-pageflip";


function App() {
  return (
    <div className="App">
      <div className="flipbook-container">
        <HTMLFlipBook width={300} height={300}>
          <div className="demoPage-left">Page 1
          <h1>Starting with the first page</h1>
          
          </div>
          <div className="demoPage-right">
            <p>Page 2</p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="demoPage-left">Page 3
            <p> Third page</p>
          </div>
      
          <div className="demoPage-right">Page 4
            <p>It is fourth page</p>
          </div>
          
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
