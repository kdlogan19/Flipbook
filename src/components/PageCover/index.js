import React from "react";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <div className="page-image">
          <img
            src={props.image}
            alt="page"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
});

export default PageCover;
