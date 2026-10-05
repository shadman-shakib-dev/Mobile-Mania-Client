/* eslint-disable react/no-unescaped-entities */
"use client";
import ItemDetails from "@/components/ui/ItemDetails";
import { useAppSelector } from "@/redux/hook";

const Page = () => {
  const products = useAppSelector((store) => store.cart.products);
  const { selectedItems, totalPrice } = useAppSelector((store) => store.cart);

  // SVG Icon Components
  const ShoppingCartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </svg>
  );

  const PackageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
      <path
        fillRule="evenodd"
        d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CreditCardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
      <path
        fillRule="evenodd"
        d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const TruckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h12V8.625c0-1.036-.84-1.875-1.875-1.875h-8.25A1.875 1.875 0 0 0 13.5 8.625V15Z" />
      <path d="M1.5 15H12v2.625c0 1.036-.84 1.875 1.875 1.875h2.25A1.875 1.875 0 0 0 18 17.625V15h6.75a1.125 1.125 0 0 1 0 2.25H21v.375c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 18v-.375H1.5a1.125 1.125 0 0 1 0-2.25Z" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ShoppingBagIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SmallPackageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
      <path
        fillRule="evenodd"
        d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SmallCreditCardIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
      <path
        fillRule="evenodd"
        d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const SmallTruckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h12V8.625c0-1.036-.84-1.875-1.875-1.875h-8.25A1.875 1.875 0 0 0 13.5 8.625V15Z" />
      <path d="M1.5 15H12v2.625c0 1.036-.84 1.875 1.875 1.875h2.25A1.875 1.875 0 0 0 18 17.625V15h6.75a1.125 1.125 0 0 1 0 2.25H21v.375c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 18v-.375H1.5a1.125 1.125 0 0 1 0-2.25Z" />
    </svg>
  );

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="">
        <div className="max-w-[1230px] mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-[#22A1F0] to-[#1e90ff] rounded-full text-white">
              <ShoppingCartIcon />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Your Shopping Cart
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Review your selected items before checkout
          </p>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Cart Items */}
          <div className="flex-1">
            {products.length > 0 ? (
              <div className="space-y-6">
                {/* Progress Steps */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#22A1F0] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          1
                        </span>
                      </div>
                      <span className="font-semibold text-[#22A1F0]">
                        Review Cart
                      </span>
                    </div>
                    <div className="text-gray-400">
                      <ArrowRightIcon />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-sm">
                          2
                        </span>
                      </div>
                      <span className="text-gray-500">Checkout</span>
                    </div>
                    <div className="text-gray-400">
                      <ArrowRightIcon />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-sm">
                          3
                        </span>
                      </div>
                      <span className="text-gray-500">Complete</span>
                    </div>
                  </div>
                </div>

                {/* Cart Items Header */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-[#22A1F0]">
                      <PackageIcon />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Cart Items ({products.length})
                    </h2>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    {products.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <ItemDetails item={item} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security & Delivery Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-green-600">
                        <CreditCardIcon />
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        Secure Payment
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-blue-600">
                        <TruckIcon />
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        Fast Delivery
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Free shipping on orders over $50
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Empty Cart State
              <div className="bg-white rounded-xl p-12 shadow-lg border text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-orange-500">
                    <ShoppingBagIcon />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Your Cart is Empty
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <button className="bg-gradient-to-r from-[#22A1F0] to-[#1e90ff] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#1e90ff] hover:to-[#22A1F0] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Right Section - Order Summary */}
          {products.length > 0 && (
            <div className="lg:w-80">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl shadow-xl border overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#22A1F0] to-[#1e90ff] p-6 text-white">
                    <h2 className="text-xl font-bold flex items-center space-x-2">
                      <CreditCardIcon />
                      <span>Order Summary</span>
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Items Count */}
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-[#22A1F0]">
                          <SmallPackageIcon />
                        </div>
                        <span className="font-semibold text-gray-800">
                          Selected Items
                        </span>
                      </div>
                      <span className="text-xl font-bold text-[#22A1F0]">
                        {selectedItems}
                      </span>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping:</span>
                        <span className="text-green-600 font-semibold">
                          Free
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Tax:</span>
                        <span className="font-semibold">
                          ${(totalPrice * 0.1).toFixed(2)}
                        </span>
                      </div>
                      <hr className="border-gray-200" />
                      <div className="flex justify-between text-xl font-bold text-gray-800">
                        <span>Total:</span>
                        <span className="text-[#22A1F0]">
                          ${(totalPrice * 1.1).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-[#22A1F0] to-[#1e90ff] text-white py-4 rounded-lg font-semibold hover:from-[#1e90ff] hover:to-[#22A1F0] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                        <SmallCreditCardIcon />
                        <span>Proceed to Checkout</span>
                      </button>
                      <button className="w-full border-2 border-[#22A1F0] text-[#22A1F0] py-3 rounded-lg font-semibold hover:bg-[#22A1F0] hover:text-white transition-all duration-300">
                        Continue Shopping
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-xs text-gray-600">Secure</span>
                        </div>
                        <div className="p-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <div className="text-blue-600">
                              <SmallTruckIcon />
                            </div>
                          </div>
                          <span className="text-xs text-gray-600">
                            Fast Ship
                          </span>
                        </div>
                        <div className="p-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <span className="text-purple-600 text-xs">
                              24/7
                            </span>
                          </div>
                          <span className="text-xs text-gray-600">Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promo Code Section */}
                {/* <div className="mt-6 bg-white rounded-xl shadow-lg border p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Have a promo code?</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22A1F0] focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-[#22A1F0] text-white rounded-lg hover:bg-[#1e90ff] transition-colors">
                      Apply
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
