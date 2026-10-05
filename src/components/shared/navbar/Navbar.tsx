"use client";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/Mobile-Mania.png";

const Navbar = () => {
  const cartItem = useAppSelector((store) => store.cart.products);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown on route change
  useEffect(() => {
    closeDropdown();
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const desktopNavItems = [
    { href: "/", label: "Home" },
    { href: "/category", label: "Top Brands" },
    { href: "/products", label: "Products" },
    { href: "/flash-sale", label: "Flash Sale" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const mobileNavItems = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      href: "/category",
      label: "Top Brands",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
    },
    {
      href: "/products",
      label: "Products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      href: "/flash-sale",
      label: "Flash Sale",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5 10.5 6.75 4.5 0.75h15.75L14.25 6.75 21 13.5H3.75Z"
          />
        </svg>
      ),
    },
    {
      href: "/about",
      label: "About Us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      ),
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="shadow-md mb-16" ref={dropdownRef}>
      <div className="max-w-[1230px] mx-auto">
        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleDropdown}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
          >
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#22A1F0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#22A1F0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Logo */}
          <Link href="/" className="flex-1 flex justify-center">
            <Image
              className="hover:scale-105 transition-all duration-300"
              src={logo}
              alt="Logo"
              width={120}
              height={120}
              priority
            />
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Cart */}
            <Link
              href="/cart"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#22A1F0"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              {cartItem?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartItem.length > 9 ? "9+" : cartItem.length}
                </span>
              )}
            </Link>

            {/* Mobile Dashboard */}
            <Link
              href="/dashboard"
              className="bg-[#22A1F0] hover:bg-[#1E8BC3] text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Overlay */}
        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeDropdown}
            />

            {/* Dropdown Menu */}
            <div className="lg:hidden absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50">
              <nav className="px-4 py-2">
                <ul className="space-y-1">
                  {mobileNavItems.map((item) => (
                    <li key={item.href} onClick={closeDropdown}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                          isActive(item.href)
                            ? "bg-[#22A1F0] text-white shadow-md"
                            : "text-gray-700 hover:bg-[#22A1F0] hover:text-white"
                        }`}
                      >
                        <span className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}

        {/* Desktop Navbar - Simplified and Clean */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="hover:scale-105 transition-all duration-300"
                src={logo}
                alt="Mobile Mania Logo"
                width={140}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-1">
            {desktopNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-[#22A1F0] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#22A1F0]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Cart Link */}
            <Link
              href="/cart"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                isActive("/cart")
                  ? "bg-[#22A1F0] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#22A1F0]"
              }`}
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                {cartItem?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                    {cartItem.length > 9 ? "9+" : cartItem.length}
                  </span>
                )}
              </div>
              {/* <span>Cart</span> */}
            </Link>
          </nav>

          {/* Dashboard Button */}
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive("/dashboard")
                  ? "bg-[#1E8BC3] text-white shadow-lg"
                  : "bg-[#22A1F0] hover:bg-[#1E8BC3] text-white hover:shadow-lg"
              }`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
