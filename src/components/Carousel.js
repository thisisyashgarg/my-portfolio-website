import React, { useState, useEffect } from "react";
import forwardlogo from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg";
import backwardlogo from "../images/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48.svg";
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
    <div className="relative mb-6">
      <img
        alt="img"
        className="border rounded-xl w-full "
        src={arrayOfImages[position]}
      />

      {arrayOfImages.length > 1 && (
        <>
          <img
            onClick={() =>
              handleBackwardCarouselChange(arrayOfImages, position, setPosition)
            }
            className="absolute top-0 mt-32 ml-5 w-8 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 border"
            alt="backward"
            src={backwardlogo}
          />

          <img
            onClick={() =>
              handleForwardCarouselChange(arrayOfImages, position, setPosition)
            }
            className="absolute top-0 right-0 mt-32 mr-5 w-8 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 border"
            alt="forward"
            src={forwardlogo}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
