import React from "react";
import "./Page.css";
import LazyLoad from 'react-lazyload'

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image">  
            <img
              src={props.image}
              alt="page"
            />
          
        </div>
      </div>
    </div>
  );
});

export default Page;
