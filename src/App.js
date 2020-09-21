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

  const toggleHover = () => {
    setZoominHover(true);
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
                  console.log(p);
                }}
                showCover={false}
                className="flip-book"
              >
                <div className="demoPage-left">
                  <h3>Page 1</h3>
                  <p>
                    Nulla congue pulvinar pharetra. Cras sed malesuada arcu.
                    Duis eleifend nunc laoreet odio dapibus ac convallis sapien
                    ornare. Nullam a est id diam elementum rhoncus.Ad dicam
                    diceret pri. Cu animal eligendi eam, nam ea alia oratio
                    constituam, ad elit dolore possim est. Usu in nostro
                    delectus, ne definitionem delicatissimi has. Cu sea iriure
                    vivendum dignissim, choro nonumy philosophia ex mea. In usu
                    reque liber fabellas, omnes omittam te per, ei novum
                    percipitur cum. An eum erat facer, persius delectus ei vis.
                  </p>
                  <br></br>
                  <br></br>
                </div>
                <div className="demoPage-right">
                  <div>
                    {/* <img src="/images/2.jpg" style={{objectFit:"content"}} /> */}
                    {/* {p.getPageFlip().loadFromImages["images/2.jpg"]} */}
                  </div>
                </div>
                <div className="demoPage-left">
                  Page 3<p> Third page</p>
                </div>

                <div className="demoPage-right">
                  Page 4<p>It is fourth page</p>
                </div>
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
          onMouseEnter={() => setZoominHover(20)}
          onMouseLeave={() => setZoominHover(16)} 
          onClick={() => setscale(scale + 0.1)}
        />
        <FaSearchMinus
          className="footer-item"
          size = {zoomoutHover}
          onMouseEnter={() => setZoomoutHover(20)}
          onMouseLeave={() => setZoomoutHover(16)} 
          onClick={() => setscale(scale - 0.1)}
        />
        <FaCompress
          className="footer-item"
          size = {zoomOriginalHover}
          onMouseEnter={() => setZoomOriginalHover(20)}
          onMouseLeave={() => setZoomOriginalHover(16)} 
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
