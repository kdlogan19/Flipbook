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
  var numberOfPages = 12; //Input length of book
  
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
    const currentIndex = bookRef.current.pageFlip.getCurrentPageIndex()
    console.log(currentIndex)
    return (<>
              <Thumbnails
                turnToPage={jumpToPage} numberOfThumbnails={numberOfPages} 
                showThumbnails = {showThumbnails}
                setShowThumbnails= {setShowThumbnails}
                currentIndex={currentIndex}
              />
              <Overlay setProperty={setShowThumbnails} property={showThumbnails} 
                overlayActive={overlayActive}
                setOverlayActive ={setOverlayActive}
              />
              {/* {thumbnailsRef.scrollTop = 200} */}
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
                width={700}
                height={950}
                ref={bookRef}
                showCover={true}
                className="flip-book"
                flippingTime={900}
                size="stretch"
                minHeight={500}
                minWidth={200}
                // swipeDistance={200}
              >
                {/* Book Cover */}
                <PageCover image="/images/bookcover.png">BOOK TITLE</PageCover>
                {/* Rest of the pages */}
                {[...Array(numberOfPages)].map((_, index) => {
                  let path = "/images/" + (index+1) + ".jpg" 
                  return <Page key={index} image={path} />;
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
          <label>/{numberOfPages}</label>
          <button onClick={() => jumpToPage(pageNumber)}>Go</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
