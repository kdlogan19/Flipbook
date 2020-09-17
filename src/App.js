import React from 'react';
import logo from './logo.svg';
import './App.css';
import HTMLFlipBook from "react-pageflip";


function App() {
  let p;
  return (
    <div className="App">
      <div className="flipbook-container">
        <HTMLFlipBook width={300} height={600} ref={(component) => {
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
            <p>Page 2</p>
          </div>
          <div className="demoPage-left">Page 3
            <p> Third page</p>
          </div>
      
          <div className="demoPage-right">Page 4
            <p>It is fourth page</p>
          </div>

        </HTMLFlipBook>

        <div id="fb5-footer">
            
            <div class="fb5-bcg-tools"></div>
            
            <a id="fb5-logo" target="_blank" href="http://codecanyon.net/user/flashmaniac?ref=flashmaniac">
                <img alt="" src="img/logo.png" />
            </a>
            
            <div class="fb5-menu" id="fb5-center">
                <ul>
                
                    {/* <!-- icon download --> */}
                    <li>
                        <a title="DOWNLOAD (ZIP)  " class="fb5-download" href="img/file.pdf"></a>
                    </li>
                                        
                    
                    {/* <!-- icon_zoom_in -->                               */}
                    <li>
                        <a title="ZOOM IN" class="fb5-zoom-in"></a>
                    </li>                               
                    
                    {/* <!-- icon_zoom_out --> */}
                    
                    <li>
                        <a title="ZOOM OUT " class="fb5-zoom-out"></a>
                    </li>                                
                    
                    {/* <!-- icon_zoom_auto --> */}
                    <li>
                        <a title="ZOOM AUTO " class="fb5-zoom-auto"></a>
                    </li>                                
                    
                    {/* <!-- icon_zoom_original --> */}
                    <li>
                        <a title="ZOOM ORIGINAL (SCALE 1:1)" class="fb5-zoom-original"></a>
                    </li>
                                    
                    
                    {/* <!-- icon_allpages --> */}
                    <li>
                        <a title="SHOW ALL PAGES " class="fb5-show-all"></a>
                    </li>
                                                    
                    
                    {/* <!-- icon_home --> */}
                    <li>
                        <a title="SHOW HOME PAGE " class="fb5-home"></a>
                    </li>
                                    
                </ul>
            </div>
            
        
        </div>
      </div>
    </div>
  );
}

export default App;
