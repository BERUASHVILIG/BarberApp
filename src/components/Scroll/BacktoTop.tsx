import React, { useState, useEffect } from "react";

const BacktoTop = () => {
  const [backtoTop, setBacktoTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backtoTop && (
        <button
          onClick={scrollUp}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: "50px",
            height: "100px",
            // border: "3px solid",
            right: "50px",
            bottom: "50px",
            fontSize: "50px",
          }}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
