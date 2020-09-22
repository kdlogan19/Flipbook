import React from "react";
import "./Page.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image">
          <img
            src={props.image}
            alt="page"
            style={{ width: "400px", height: "600px" }}
          />
        </div>
      </div>
    </div>
  );
});

export default Page;
