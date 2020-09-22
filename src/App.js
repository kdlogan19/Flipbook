import React from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus, FaCompress } from "react-icons/fa";

function App() {
  var p;
  var pageNumber = 0;
  const [scale, setscale] = React.useState(1);
  const [zoominHover, setZoominHover] = React.useState(16)
  const [zoomoutHover, setZoomoutHover] = React.useState(16)
  const [zoomOriginalHover, setZoomOriginalHover] = React.useState(16)
  const elements = [1,2,3,4,5,6]

  // Default position of the flipbook.
  const [draggablePos, setdraggablePos] = React.useState({ x: 0, y: 0 });

  // Making flipbook draggable upon zooming.
  let enableDraggable = scale > 1;

  const jumpToPage = () => {
    console.log("hi", pageNumber, typeof pageNumber);
    if (p) {
      p.pageFlip.turnToPage(parseInt(pageNumber));
    }
  };
 

  const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <div className="page-image">
            <img src={props.image} alt="page" style={{width:"400px", height:"600px"}}/>
          </div>
        </div>
      </div>
    );
  });

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <div className="page-image">
            <img src={props.image} alt="page" style={{width:"400px", height:"600px"}}/>
          </div>  
        </div>
      </div>
    );
  });

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
                width={400}
                height={600}
                ref={(component) => {
                  p = component;
                }}
                showCover={false}
                className="flip-book"
              >
                <PageCover image="/images/page1.jpg">BOOK TITLE</PageCover>
                {elements.map((_, index) => {
                  return <Page key={index} image="/images/page1.jpg" />
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
      <div className="footer">
        <FaSearchPlus
          className="footer-item" 
          size = {zoominHover}
          // onMouseEnter={() => setZoominHover(20)}
          // onMouseLeave={() => setZoominHover(16)} 
          onClick={() => setscale(scale + 0.1)}
        />
        <FaSearchMinus
          className="footer-item"
          size = {zoomoutHover}
          // onMouseEnter={() => setZoomoutHover(20)}
          // onMouseLeave={() => setZoomoutHover(16)} 
          onClick={() => setscale(scale - 0.1)}
        />
        <FaCompress
          className="footer-item"
          size = {zoomOriginalHover}
          // onMouseEnter={() => setZoomOriginalHover(20)}
          // onMouseLeave={() => setZoomOriginalHover(16)} 
          onClick={() => {
            setdraggablePos({ x: 0, y: 0 });
            setscale(1);
          }}
        />
        <div className="footer-item page-number-input">
          <label>PAGE</label>
          <input
            type="number"
            onChange={(event) => (pageNumber = event.target.value)}
          ></input>
          <button onClick={jumpToPage}>Go</button>
        </div>
      </div>
    </div>
  );
}

export default App;
