import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({
  imgURL,
  location,
  title,
  desc,
  desc2,
  star,
  review,
  price,
  numOfNights,
}) {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-width: 744px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 743px)" });

  const [isLiked, setIsLiked] = useState(false);

  const handleHeart = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  return (
    <div>
      {/* Mobile Layout */}
      {isMobile && (
        <div className="flex flex-col font-light py-3 my-2">
          {/* Image */}
          <div className="w-full flex-shrink-0">
            <Image
              src={imgURL}
              width={884}
              height={663}
              onjectFit="contain"
              className="rounded-xl"
            />
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center">
            <span className="ml-[-2px]">
              <StarIcon className="h-5 w-5" fill="#FF385C" />
            </span>
            <span className="ml-1">{star.toFixed(2)}</span>
            <span className="text-gray-400 ml-1">({review})</span>
          </div>

          {/* Location and Title */}
          <div className="text-lg">
            <div>{location}</div>
            <div>{title}</div>
          </div>

          {/* Price */}
          <div>
            <div>
              <span className="font-bold">
                ${new Intl.NumberFormat().format(price)}
              </span>{" "}
              / night
            </div>
            <div className="text-gray-400 text-sm">
              ${new Intl.NumberFormat().format(price * numOfNights)} total
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      {isTabletOrDesktop && (
        <div className="flex flex-row font-light -mx-4 px-4 py-6 cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
          {/* Image */}
          <div className="w-[300px] flex-shrink-0">
            <Image
              src={imgURL}
              width={663}
              height={442}
              onjectFit="contain"
              className="rounded-xl"
            />
          </div>

          {/* Right Side - Info */}
          <div className="flex flex-col flex-grow ml-4">
            {/* Location and Title */}
            <div className="flex justify-between">
              <div className="text-sm text-gray-400">{location}</div>
              <div>
                <HeartIcon
                  style={{ color: `${isLiked ? "#FF385C" : "#222222"}` }}
                  onClick={handleHeart}
                  fill={isLiked ? "#FF385C" : "#ffffff"}
                  className="h-7 cursor-pointer"
                />
              </div>
            </div>
            <div className="text-lg font-normal">{title}</div>

            {/* Little Divider */}
            <div className="border-b w-10 pt-2" />

            {/* Description */}
            <div className="mt-2">
              <div className="text-sm text-gray-400">{desc}</div>
              <div className="text-sm text-gray-400">{desc2}</div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col flex-grow justify-end">
              {/* Price */}
              <div className="flex justify-end">
                <span className="font-bold text-lg">
                  ${new Intl.NumberFormat().format(price)}
                </span>
                <span className="ml-1">/ night</span>
              </div>

              {/* Rating, Reviews and Total */}
              <div className="flex justify-between">
                {/* Rating and Reviews */}
                <div className="flex text-sm items-center">
                  <span className="ml-[-2px]">
                    <StarIcon className="h-5 w-5" fill="#FF385C" />
                  </span>
                  <span className="ml-1 font-medium">{star.toFixed(2)}</span>
                  <span className="text-gray-400 ml-1">({review})</span>
                </div>

                {/* Total */}
                <div className="text-gray-400 text-sm">
                  ${new Intl.NumberFormat().format(price * numOfNights)} total
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
