import Image from "next/image";
import { notFound } from "next/navigation";
import { MdOutlineLocalShipping, MdDeliveryDining } from "react-icons/md";

interface TProducts {
  params: {
    productId: string;
  };
}

// For SSG in 10 Products
export const generateStaticParams = async () => {
  const res = await fetch(
    `https://mobile-mania-server-shadman.vercel.app/api/v1/products`
  );
  if (!res.ok) {
    return [];
  }

  let products: any[] | null = null;
  try {
    products = await res.json();
  } catch {
    products = null;
  }

  if (!Array.isArray(products)) {
    return [];
  }

  return products.slice(0, 10).map((product: any) => ({
    productId: product._id,
  }));
};
const Page = async ({ params }: TProducts) => {
  const res = await fetch(
    `https://mobile-mania-server-shadman.vercel.app/api/v1/products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    notFound();
  }

  let product: any = null;
  try {
    product = await res.json();
  } catch {
    product = null;
  }

  if (!product || !product._id) {
    notFound();
  }

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="flex flex-col lg:flex-row gap-5">
        <Image
          src={product.image}
          width={400}
          height={500}
          className="rounded-md shadow-md lg:p-0 p-4"
          alt="Product Image"
        />
        <div className="p-2">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex gap-6 text-2xl mt-3 items-center border-b-2 border-base-300 border-dashed pb-5">
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              <span className="font-semibold">Price:</span> ${product.new_price}
              <sup className="text-[#22A1F0]">
                {" "}
                $<del>{product?.previous_price}</del>
              </sup>
            </p>
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              <span className="font-semibold">Rating:</span> {product.rating}
            </p>
            <p>
              <span className="font-semibold -ml-1">Brand: </span>
              <span className="xs:text-[16px] xs:font-semibold lg:text-xl sm:font-semibold sm:text-[16px]">
                {product.category}
              </span>
            </p>
          </div>
          <p className="my-6 sm:text-justify xs:text-justify">
            {product.description}
          </p>
          <div>
            <p className="flex items-center gap-1">
              <MdOutlineLocalShipping className="size-6" />
              Delivery Cost Inside Dhaka:
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_inside}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineLocalShipping className="size-6" />
              Delivery Cost Outside Dhaka:
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_outside}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdDeliveryDining className="size-6" />
            <p>
              Delivery Within{" "}
              <span className="text-lg font-semibold">
                {product.Deliver_days}
              </span>{" "}
              Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
