import React from "react";
import "./Page.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref} style={{marginTop:"auto"}}>
      <div className="page-container">
          <img
            src={props.image}
            alt="page"
          />
      </div>
    </div>
  );
});

export default Page;
