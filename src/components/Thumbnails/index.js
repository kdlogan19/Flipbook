import React from "react";
import "./thumbnail.css"

const Thumbnails = (props)=> {
  // let currentIndex = props.bookRef.current.pageFlip.getCurrentPageIndex();
  // let [pages, setPages] = useState(props.pages);
  // useEffect(() => {
  //   // Update the document title using the browser API
    
  //   function getListOfThumbnails(){
  //     let currentIndex = props.bookRef.current.pageFlip.getCurrentPageIndex();
  //     let left,right;
  //     //Slicing a window of length "numberOfThumbnails" to display
  //     left = Math.max(0,currentIndex- Math.floor((props.numberOfThumbnails-2)/2));
  //     right = Math.min(currentIndex + 1 + Math.floor((props.numberOfThumbnails-2)/2), props.pages.length-1);
  //     const temp =  props.pages.slice(left,right+1);
  //     setPages(temp);
  //   }
  //   getListOfThumbnails();
  // }, []);

  
    
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
