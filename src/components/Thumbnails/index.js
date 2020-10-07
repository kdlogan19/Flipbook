import React from "react";
import "./thumbnail.css"

const Thumbnails = (props)=> {

  return (
    <div className="thumbnail-container">
      {props.pages.map((val, i) => {
          return (
              <img src={val} alt="thumbnail" 
              onClick={() => props.turnToPage(props.currentIndex + i - (props.numberOfThumbnails - 2)/2)} 
              key={i}/>
           )
      })}
    </div>
  );
};

export default Thumbnails;
