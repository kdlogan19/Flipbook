import React from "react";
import "./Page.css";
import useWindowDimensions from '../../utils/getWindowDimension'

const Page = React.forwardRef((props, ref) => {
  const {height, width} = useWindowDimensions()
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
