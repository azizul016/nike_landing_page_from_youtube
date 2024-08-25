import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-[#938DAA] text-xl leading-normal font-bold">
          ( 4.5)
        </p>
      </div>
      <h3 className="font-semibold font-palanquin mt-2 text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-[#FF6452] font-semibold text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
