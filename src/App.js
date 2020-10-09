import React from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus, FaCompress, FaFilePdf, FaImages, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Page from "./components/Page";
import PageCover from "./components/PageCover";
import Thumbnails from './components/Thumbnails';
import Overlay from './components/Overlay'


function App() {
  var bookRef = React.useRef();
  var pageNumber = 0;
  let [scale, setscale] = React.useState(1);
  let [showThumbnails, setShowThumbnails] = React.useState(false);
  let [overlayActive, setOverlayActive] = React.useState(false);
  var numberOfThumbnails = 4; //Keep number of thumbnails even for the symmetry purpose

  //List of images
  var elements = ["https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/",
                  "https://picsum.photos/200/","https://picsum.photos/200/","https://picsum.photos/200/"];

  const height = window.innerHeight;
  const width = window.innerWidth;
  
  // Default position of the flipbook.
  const [draggablePos, setdraggablePos] = React.useState({ x: 0, y: 0 });

  // Making flipbook draggable upon zooming.
  let enableDraggable = scale > 1;

  const jumpToPage = (pageNum) => {
    if (bookRef) { 
      bookRef.current.pageFlip.flip(parseInt(pageNum));
    }
  };

  const showThumbnailsFunc = () => {
    let currentIndex = 0;
    if(bookRef){
      currentIndex = bookRef.current.pageFlip.getCurrentPageIndex();
    }
    // setOverlayActive(true);
    let left,right;
    //Slicing a window of length "numberOfThumbnails" to display
    left = Math.max(0,currentIndex - Math.floor((numberOfThumbnails-2)/2));
    right = Math.min(currentIndex + 1 + Math.floor((numberOfThumbnails-2)/2), elements.length-1);
    const slicedThumbnails = elements.slice(left,right+1)
    
    return (<>
      <Thumbnails pages={slicedThumbnails} currentIndex={currentIndex} 
              turnToPage={jumpToPage} numberOfThumbnails={numberOfThumbnails} 
              showThumbnails = {showThumbnails}
              setShowThumbnails= {setShowThumbnails}
            />
            <Overlay setProperty={setShowThumbnails} property={showThumbnails} 
            overlayActive={overlayActive}
            setOverlayActive ={setOverlayActive}
            />
            </>)
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
              onClick={() => bookRef.current.pageFlip.flipPrev()}
            />
            <div
              className={`flipbook-container ${
                enableDraggable ? "draggable" : ""
              }`}
            >
              <HTMLFlipBook
                width={Math.floor(width*0.3)}
                height={Math.floor(height*0.8)}
                ref={bookRef}
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
              onClick={() => {
                bookRef.current.pageFlip.flipNext()
              } }
            />
          </div>
        </span>
        
      </Draggable>
      
      {showThumbnails && showThumbnailsFunc()}
    
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
          onClick={() => setShowThumbnails(!showThumbnails)}
        />

         {/* Book Navigation by page numbers */}
        <div className="footer-item page-number-input">
          <label>PAGE</label>
          <input
            type="number"
            onChange={(event) => (pageNumber = event.target.value)}
          ></input>
          <label>/{elements.length}</label>
          <button onClick={() => jumpToPage(pageNumber)}>Go</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
