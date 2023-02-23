import React, { useState, useEffect } from "react";
import { BACKWARD_LOGO, FORWARD_LOGO } from "../utils/constants";
import { handleBackwardCarouselChange } from "../utils/helper";
import { handleForwardCarouselChange } from "../utils/helper";
import AOS from "aos";

const Carousel = ({ arrayOfImages }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return arrayOfImages.length === 0 ? null : (
    <div className="mb-6">
      <img
        alt="img"
        className="border rounded-xl "
        src={arrayOfImages[position]}
      />
      <div className="flex justify-between">
        <button
          onClick={() =>
            handleBackwardCarouselChange(arrayOfImages, position, setPosition)
          }
        >
          <img className="w-8 " alt="backward" src={BACKWARD_LOGO} />
        </button>
        <button
          onClick={() =>
            handleForwardCarouselChange(arrayOfImages, position, setPosition)
          }
        >
          <img className="w-8 " alt="forward" src={FORWARD_LOGO} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
