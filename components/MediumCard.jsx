import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="object-cover">
        <Image src={img} height={450} width={450} className="rounded-xl" />
      </div>
      <h3 className="text-[18px] pt-1">{title}</h3>
    </div>
  );
}

export default MediumCard;
