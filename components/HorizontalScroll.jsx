import React, { useState, useRef } from "react";
import MediumCard from "./MediumCard";

function HorizontalScroll({ data }) {
  const [isLeftMost, setIsLeftMost] = useState(true);
  const [isRightMost, setIsRightMost] = useState(false);
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft = 0;
    setIsRightMost(false);
    setIsLeftMost(true);
  };

  const scrollRight = () => {
    scrollContainer.current.scrollLeft = 5000;
    setIsRightMost(true);
    setIsLeftMost(false);
  };

  return (
    <div className="p-3">
      {/* Prev Button */}
      {!isLeftMost && isRightMost && (
        <div className="hidden mobile-bp:block logo-bp:hide z-20 absolute top-1/2 left-[-12px] rounded-full text-black bg-white shadow-md border border-gray-100 active:scale-95">
          <button
            className="h-8 w-8"
            type="button"
            onClick={() => scrollLeft()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ marginLeft: "6px" }}
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Small & Medium Screen View */}
      <ul
        ref={scrollContainer}
        style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
        className="ul -mx-2 scrollbar-hide logo-bp:hide"
      >
        {data?.map(({ id, img, title }) => (
          <li
            style={{
              borderWidth: "8px 8px",
              maxWidth: "33.3333%",
              flex: "0 0 33.3333%",
            }}
            className="li"
          >
            <MediumCard key={id} img={img} title={title} />
          </li>
        ))}
      </ul>

      {/* Large Screen View */}
      <div className="p-3 -mx-3 grid-cols-4 gap-4 hidden mobile-bp:hidden logo-bp:show-grid">
        {data?.map(({ id, img, title }) => (
          <MediumCard key={id} img={img} title={title} />
        ))}
      </div>

      {/* Next Button */}
      {!isRightMost && isLeftMost && (
        <div className="hidden mobile-bp:block logo-bp:hide z-20 absolute top-1/2 right-[-12px] rounded-full text-black bg-white shadow-md border border-gray-100 active:scale-95">
          <button
            className="h-8 w-8"
            type="button"
            onClick={() => scrollRight()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ marginLeft: "6px" }}
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default HorizontalScroll;
