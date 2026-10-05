import { TProducts } from "@/types";

const API_URL =
  process.env.API_URL ??
  "https://mobile-mania-server-shadman.vercel.app/api/v1";

export const getProducts = async (query = "", options?: RequestInit) => {
  try {
    const response = await fetch(
      `${API_URL}/products${query ? `?${query}` : ""}`,
      options
    );

    if (!response.ok) {
      console.error(`Products API failed with status ${response.status}`);
      return [] as TProducts[];
    }

    const data: unknown = await response.json();
    return Array.isArray(data) ? (data as TProducts[]) : [];
  } catch (error) {
    console.error("Products API request failed:", error);
    return [] as TProducts[];
  }
};
