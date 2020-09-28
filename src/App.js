import React from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus, FaCompress, FaFilePdf, FaImages } from "react-icons/fa";
import Page from "./components/Page";
import PageCover from "./components/PageCover";
import LazyLoad from 'react-lazyload'


function App() {
  var p;
  var pageNumber = 0;
  const [scale, setscale] = React.useState(1);
  
  var elements = [...Array(1000).keys()];
  const height = window.innerHeight;
  const width = window.innerWidth;

  // Default position of the flipbook.
  const [draggablePos, setdraggablePos] = React.useState({ x: 0, y: 0 });

  // Making flipbook draggable upon zooming.
  let enableDraggable = scale > 1;

  const jumpToPage = () => {
    // console.log("hi", pageNumber, typeof pageNumber);
    if (p) {
      p.pageFlip.turnToPage(parseInt(pageNumber));
    }
  };
  
  return (
    <div className="App">
      <LazyLoad>
      <Draggable
        disabled={!enableDraggable}
        defaultClassNameDragging="dragging"
        position={draggablePos}
        defaultPosition={{ x: 0, y: 0 }}
        onStart={() => setdraggablePos(null)}
      >
        <span>
          <div
            className="flipbook-nav-container"
            style={{ transform: `scale(${scale})` }}
          >
            <div
              className="prev-page-button"
              onClick={() => p.pageFlip.flipPrev()}
            />
            <div
              className={`flipbook-container ${
                enableDraggable ? "draggable" : ""
              }`}
            >
              <HTMLFlipBook
                width={Math.floor(width*0.29)}
                height={Math.floor(height*0.8)}
                ref={(component) => {
                  p = component;
                }}
                showCover={true}
                className="flip-book"
              >
                <PageCover image="/images/bookcover.png">BOOK TITLE</PageCover>
                {elements.map((_, index) => {
                  return <Page key={index} image="/images/page1.jpg" pageNumber={index}/>;
                })}
              </HTMLFlipBook>
            </div>
            <div
              className="next-page-button"
              onClick={() => p.pageFlip.flipNext()}
            />
          </div>
        </span>
      </Draggable>
      </LazyLoad>
      <div className="footer">
        <FaSearchPlus
          className="footer-item"
          onClick={() => setscale(scale + 0.1)}
        />
        <FaSearchMinus
          className="footer-item"
          onClick={() => setscale(scale - 0.1)}
        />
        <FaCompress
          className="footer-item"
          onClick={() => {
            setdraggablePos({ x: 0, y: 0 });
            setscale(1);
          }}
        />
        <a href="/who.pdf" target="_blank"> 
          <FaFilePdf
            className="footer-item"
          />
        </a>
        <FaImages
          className="footer-item"
          onClick={()=>{}}
        />
        <div className="footer-item page-number-input">
          <label>PAGE</label>
          <input
            type="number"
            onChange={(event) => (pageNumber = event.target.value)}
          ></input>
          <label>/{elements.length}</label>
          <button onClick={jumpToPage}>Go</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
