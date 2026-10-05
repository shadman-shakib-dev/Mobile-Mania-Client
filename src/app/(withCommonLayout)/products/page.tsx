import Filter from "@/components/ui/Filter";
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async (props: {
  params: { products: string };
  searchParams: any;
}) => {
  const search = props.searchParams;

  const queryUrl = new URLSearchParams(search).toString();
  const res = await fetch(
    `https://mobile-mania-server-shadman.vercel.app/api/v1/products?${queryUrl}`
  );
  const products = await res.json();

  return (
    <div className="max-w-[1230px] mx-auto my-6 lg:my-12">
      {/* Page Header */}
      <div className="my-6 lg:my-8 px-4 lg:px-0">
        <h1 className="text-2xl lg:text-3xl font-semibold my-3 lg:my-5 text-center">
          Collection Of Mobile<span className="text-[#22A1F0]"> Mania</span>
        </h1>
        <p className="text-base lg:text-lg w-full lg:w-3/4 text-center mx-auto text-gray-400 px-4">
          Welcome to <span className="font-semibold">Mobile Mania</span>, your
          premier destination for all things mobile. Dive into a world where
          cutting-edge technology meets exceptional service. Discover the joy
          of mobile innovation with us.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 px-4 lg:px-0">
        {/* Mobile Filter - Top Position */}
        <div className="lg:hidden mb-4">
          <Filter />
        </div>

        {/* Desktop Filter - Sidebar */}
        <div className="hidden lg:block lg:flex-[1] space-y-8">
          <div className="sticky top-24">
            <Filter />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 lg:flex-[6]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {products?.map((product: TProducts) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;