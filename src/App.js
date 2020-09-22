import React from "react";
import "./App.css";
import HTMLFlipBook from "react-pageflip";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus, FaCompress } from "react-icons/fa";
import Page from "./components/Page";
import PageCover from "./components/PageCover";

function App() {
  var p;
  var pageNumber = 0;
  const [scale, setscale] = React.useState(1);
  const elements = [1, 2, 3, 4, 5, 6];

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
                showCover={true}
                className="flip-book"
              >
                <PageCover image="/images/bookcover.png">BOOK TITLE</PageCover>
                {elements.map((_, index) => {
                  return <Page key={index} image="/images/page1.jpg" />;
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
