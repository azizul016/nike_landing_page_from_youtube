import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <h1 className="text-4xl font-bold font-palanquin">
        Our <span className="text-[#FF6452]">Popular</span> Products
      </h1>
      <p className="lg:max-w-lg font-montserrat text-[#938DAA] mt-2">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col=2 grid-cols-1 sm:gap-6 gap-14">
        {products?.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
