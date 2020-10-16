import React, {useEffect} from "react";
import { findDOMNode } from "react-dom";
import "./thumbnail.css"

const Thumbnails = (props)=> { 
  let thumbnailRef = null;

  useEffect(() => {
    const container = findDOMNode(thumbnailRef);
    container.scrollLeft = 100*(props.currentIndex);
  });
    
  return (
      <div className="thumbnail-container" ref={ref => thumbnailRef = ref}>
        {[...Array(props.numberOfThumbnails)].map((_, i) => {
            let path = "/images/" + (i+1) + ".jpg";
            return (
                <img id="thumbnail-image" src={path} alt="thumbnail" 
                onClick={() => props.turnToPage(i+1)} 
                key={i}/>
            )
        })}
      </div>
  );
};

export default Thumbnails;
