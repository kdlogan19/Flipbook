import React from 'react';
import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from "react-pageflip";


function App() {
  return (
    <div className="App">
      <div className="flipbook-container">
        <HTMLFlipBook width={550} height={715}>
          <div className="demoPage-left">
            <h3>Page 1</h3>
            <p>Nulla congue pulvinar pharetra. Cras sed malesuada arcu. Duis eleifend nunc
             laoreet odio dapibus ac convallis sapien ornare. Nullam a est id diam elementum rhoncus.Ad dicam diceret pri. Cu animal eligendi eam, nam ea alia oratio constituam, ad elit dolore possim est. Usu in nostro delectus, ne definitionem delicatissimi has. Cu sea iriure vivendum dignissim, choro nonumy philosophia ex mea. In usu reque
             liber fabellas, omnes omittam te per, ei novum percipitur cum. An eum erat facer, persius delectus ei vis.</p>
             <br></br><br></br>
            <p>Nulla congue pulvinar pharetra. Cras sed malesuada arcu.
               Duis eleifend nunc laoreet odio dapibus ac convallis sapien ornare. 
               Nullam a est id diam elementum rhoncus.Te amet disputando vel. 
               Cu vim persius consequat consetetur, eam id melius fuisset principes. Clita habemus et vix, ius doming philosophia et. Eos mutat luptatum ad. Ad iudico repudiandae nec, mel an tempor accusata eloquentiam, choro forensibus et eam</p>
          
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
