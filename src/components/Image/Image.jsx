import React, { useState } from "react";

const Image = ({ src, alt, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <div className="image">
      {!loaded ? (
        <svg width={width} height={height} viewBox={viewBox}>
          <rect width={width} height={height} fill="#CCC" />
        </svg>
      ) : null}
      <img
        src={src}
        style={!loaded ? { visibility: "hidden" } : {}}
        onLoad={() => setLoaded(true)}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default Image;
