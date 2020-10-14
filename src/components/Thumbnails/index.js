import React from "react";
import "./thumbnail.css"

const Thumbnails = (props)=> { 
    
  return (
      <div className="thumbnail-container">
        {[...Array(props.numberOfThumbnails)].map((_, i) => {
            let path = "/images/" + (i+1) + ".jpg";
            return (
                <img src={path} alt="thumbnail" 
                onClick={() => props.turnToPage(i+1)} 
                key={i}/>
            )
        })}
      </div>
  );
};

export default Thumbnails;
