import FlashSale from "@/pages/Home/flashSale/FlashSale";
import Hero from "@/pages/Home/hero/Hero";
import Category from "../Category";
import TrendingProducts from "../TrendingProducts";

const page = async () => {
    let products = [];

    try {
      const res = await fetch(
        "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
        {
          cache: "no-store",
        }
      );

      if (res.ok) {
        const data = await res.json();
        products = Array.isArray(data) ? data : [];
      } else {
        console.error(`Products API failed with status ${res.status}`);
      }
    } catch (error) {
      console.error("Products API request failed:", error);
    }

  return (
    <div>
      <Hero />
      <FlashSale flashSales={products} />
      <Category />
      <TrendingProducts trendingProducts={products} />
    </div>
  );
};

export default page;
