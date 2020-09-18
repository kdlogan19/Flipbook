import React from 'react';
import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from "react-pageflip";
import { FaSearchPlus, FaSearchMinus, FaArrowRight, FaArrowLeft } from 'react-icons/fa';


function App() {
  var p;
  var pageNumber = 0;

  const handlePageNumberChange = (event) => {
    // event.persist()
    console.log(event.target.value)
  
    
  }

  const jumpToPage = () => {
    console.log("hi", pageNumber, typeof(pageNumber))
    if (p){ 
     p.pageFlip.turnToPage(parseInt(pageNumber))
     }
  }

  return (
    <div className="App">
      <div className="flipbook-container">
        <HTMLFlipBook width={400} height={600} ref={(component) => {
          (p = component)
          console.log(p)
          }
          }>
          
          <div className="demoPage-left">
            <h3>Page 1</h3>
            <p>Nulla congue pulvinar pharetra. Cras sed malesuada arcu. Duis eleifend nunc
             laoreet odio dapibus ac convallis sapien ornare. Nullam a est id diam elementum rhoncus.Ad dicam diceret pri. Cu animal eligendi eam, nam ea alia oratio constituam, ad elit dolore possim est. Usu in nostro delectus, ne definitionem delicatissimi has. Cu sea iriure vivendum dignissim, choro nonumy philosophia ex mea. In usu reque
             liber fabellas, omnes omittam te per, ei novum percipitur cum. An eum erat facer, persius delectus ei vis.</p>
             <br></br><br></br>
          </div>
          <div className="demoPage-right">          
            <div>
              {/* <img src="/images/2.jpg" style={{objectFit:"content"}} /> */}
              {/* {p.getPageFlip().loadFromImages["images/2.jpg"]} */}
            </div>
          </div>
          <div className="demoPage-left">Page 3
            <p> Third page</p>
          </div>
      
          <div className="demoPage-right">Page 4
            <p>It is fourth page</p>
          </div>

        </HTMLFlipBook>

        <div id="fb5-footer">
            
            
            <div className="fb5-menu" id="fb5-center">

              <div className="fb5-download" href="" style={{padding:10}}>
                <a title="DOWNLOAD (ZIP)" className="fb5-download" href="img/file.pdf"></a>
              </div>

              <div>
                <a title="ZOOM IN" className="fb5-zoom-in" style={{padding:10}}><FaSearchPlus /></a>
              </div> 

              <div>
                <a title="ZOOM OUT " className="fb5-zoom-out" style={{padding:10}}> <FaSearchMinus /> </a>
              </div> 

              <div className="pageNumber-input">
                <input type="number" onChange={(event) => pageNumber = event.target.value} style={{padding:10}} ></input> 
              </div> 
                
              <div className="page-change">
              <button onClick={jumpToPage} style={{padding:10}}> Go</button>
              </div>  

              <div>
                <a title="SHOW ALL PAGES " className="fb5-show-all" />
              </div>                  
              <div>
              <a title="SHOW HOME PAGE " className="fb5-home"></a>
              </div>
            </div>
            
        
        </div>
      </div>
    </div>
  );
}

export default App;
