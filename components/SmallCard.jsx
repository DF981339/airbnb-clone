import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative flex-shrink-0 h-[72px] w-[72px] logo-bp:h-16 logo-bp:w-16 mr-[12px] mobile-bp:mr-4 object-contain">
        <Image
          src={img}
          layout="fill"
          height={72}
          width={72}
          className="rounded-xl"
        />
      </div>

      {/* Right */}
      <div className="flex-grow overflow-ellipsis overflow-hidden whitespace-nowrap leading-[20px]">
        {/* Top */}
        <h2 className="overflow-ellipsis overflow-hidden whitespace-nowrap">
          {location}
        </h2>
        {/* Bottom */}
        <h3 className="text-gray-500 overflow-ellipsis overflow-hidden whitespace-nowrap">
          {distance}
        </h3>
      </div>
    </div>
  );
}

export default SmallCard;
