import React from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus, FaCompress, FaFilePdf, FaImages, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Page from "./components/Page";
import PageCover from "./components/PageCover";


function App() {
  var bookRef;
  var pageNumber = 0;
  const [scale, setscale] = React.useState(1);
  
  var elements = [...Array(10).keys()];
  const height = window.innerHeight;
  const width = window.innerWidth;
  
  // Default position of the flipbook.
  const [draggablePos, setdraggablePos] = React.useState({ x: 0, y: 0 });

  // Making flipbook draggable upon zooming.
  let enableDraggable = scale > 1;

  const jumpToPage = () => {
    if (bookRef) {
      bookRef.pageFlip.turnToPage(parseInt(pageNumber));
    }
  };

  const showThumbnails = () => {

  }
  
  return (
    
    <div className="App">
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
            <FaChevronCircleLeft   size="7vh"
              className="prev-page-button"
              onClick={() => bookRef.pageFlip.flipPrev()}
            />
            <div
              className={`flipbook-container ${
                enableDraggable ? "draggable" : ""
              }`}
            >
              <HTMLFlipBook
                width={Math.floor(width*0.3)}
                height={Math.floor(height*0.8)}
                ref={(component) => {
                  bookRef = component;
                }}
                showCover={true}
                className="flip-book"
                flippingTime={750}
                size="stretch"
                minHeight={500}
                minWidth={200}
              >
                {/* Book Cover */}
                <PageCover image="/images/bookcover.png">BOOK TITLE</PageCover>

                {/* Rest of the pages */}
                {elements.map((_, index) => {
                  return <Page key={index} image="/images/page1.jpg" pageNumber={index}/>;
                })}
              </HTMLFlipBook>
            </div>

            <FaChevronCircleRight size="7vh"
              className="next-page-button"
              onClick={() => bookRef.pageFlip.flipNext()}
            />
          </div>
        </span>
      </Draggable>

      <div className="footer">
         {/* Zoom-in */}
        <FaSearchPlus
          className="footer-item"
          onClick={() => setscale(scale + 0.1)}
        />

         {/* Zoom out */}
        <FaSearchMinus
          className="footer-item"
          onClick={() => setscale(scale - 0.1)}
        />

        {/* Original Size */}
        <FaCompress
          className="footer-item"
          onClick={() => {
            setdraggablePos({ x: 0, y: 0 });
            setscale(1);
          }}
        />

        {/* Pdf of the Book */}
        <a href="/who.pdf" target="_blank"> 
          <FaFilePdf
            className="footer-item"
          />
        </a>

         {/* Show thumbnails */}
        <FaImages
          className="footer-item"
          onClick={showThumbnails}
        />

         {/* Book Navigation by page numbers */}
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
