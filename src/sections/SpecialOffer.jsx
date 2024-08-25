import { arrowRight } from "./../assets/icons";
import Button from "../components/Button";
import { offer } from "./../assets/images";

const SpecialOffer = () => {
  return (
    <section className="max-container mt-4 flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-bold text-4xl mt-5">
          <span className="text-[#FF6452] ">Special</span> Offer
        </h2>
        <p className="mt-6  info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4  info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex mt-8 gap-6">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-[#938DAA] "
            textColor="text-[#938DAA]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
