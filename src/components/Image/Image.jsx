import React, { useState } from "react";

const Image = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image">
      {!loaded ? (
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
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
