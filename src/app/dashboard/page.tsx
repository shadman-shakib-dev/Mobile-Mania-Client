import { TProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/Mobile-Mania.png";

const AllProduct = async () => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {}
  );
  const products = await res.json();
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image
              className="hover:scale-110 transition-transform lg:-ml-6 duration-300"
              src={logo}
              alt="Logo"
              width={180}
              height={180}
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/all-products" className="text-white text-lg font-semibold">
              <button className="bg-[#21A0F3] transition-transform duration-300 hover:scale-110 hover:bg-black px-4 py-3 rounded-lg">
                All Products
              </button>
            </Link>   
          </div>
        </div>
      </header>
      
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product <span className="text-[#22A1F0]">Dashboard</span>
        </h2>
        
        {/* Mobile Card View */}
        <div className="block md:hidden mx-4">
          <div className="space-y-4">
            {products.map((product: TProducts, index: number) => (
              <div
                key={product?._id}
                className="bg-white border-2 border-[#22A1F0] rounded-lg p-4 shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#22A1F0] text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={product?.image}
                      width={80}
                      height={80}
                      alt="image"
                      className="h-16 w-16 rounded-md object-cover shadow-sm"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 truncate">
                      {product?.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {product?.category}
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        ${product?.new_price}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {product?.discount}% OFF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
          <div className="overflow-x-auto border-2 border-[#22A1F0] p-6 bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Serial
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product: TProducts, index: number) => (
                  <tr
                    key={product?._id}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <Image
                        src={product?.image}
                        width={200}
                        height={50}
                        alt="image"
                        className="h-14 w-20 rounded-md shadow-sm object-cover"
                      />
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm sm:text-base font-medium text-gray-900 max-w-xs truncate">
                        {product?.title}
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product?.category}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base font-semibold text-gray-900">
                      ${product?.new_price}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {product?.discount}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;