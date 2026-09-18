"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 899,
    oldPrice: 1499,
    discount: "40% OFF",
    rating: 4.6,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Elegant Party Dress",
    category: "Dresses",
    price: 1199,
    oldPrice: 1999,
    discount: "40% OFF",
    rating: 4.5,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Women's Casual Top",
    category: "Tops",
    price: 499,
    oldPrice: 899,
    discount: "44% OFF",
    rating: 4.4,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Stylish Crop Top",
    category: "Tops",
    price: 449,
    oldPrice: 799,
    discount: "44% OFF",
    rating: 4.3,
    reviews: 201,
    image:
      "https://images.unsplash.com/photo-1564257577054-1e6e7f9e8e4c?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "High Waist Blue Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1799,
    discount: "44% OFF",
    rating: 4.6,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Women's Denim Jacket",
    category: "Jackets",
    price: 1299,
    oldPrice: 2199,
    discount: "41% OFF",
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = ["All", "Dresses", "Tops", "Jeans", "Jackets"];

export default function WomenPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 FLAT ₹200 OFF on orders above ₹1499 • Use code: STYLE200
      </div>

      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold"
          >
            Style<span className="text-pink-600">Cart</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/wishlist">
              <Heart size={23} />
            </Link>

            <Link href="/cart">
              <ShoppingCart size={23} />
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-5 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 mb-7"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold">
          Women's Fashion
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Discover dresses, tops, jeans, jackets and more
        </p>

        <div className="flex gap-3 overflow-x-auto mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full whitespace-nowrap border ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-gray-500 mb-5">
          {filteredProducts.length} products found
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}