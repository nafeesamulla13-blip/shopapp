"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Classic Casual Shirt",
    category: "Shirts",
    price: 699,
    oldPrice: 1199,
    discount: "42% OFF",
    rating: 4.5,
    reviews: 245,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Premium Black T-Shirt",
    category: "T-Shirts",
    price: 499,
    oldPrice: 899,
    discount: "44% OFF",
    rating: 4.6,
    reviews: 321,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Slim Fit Blue Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1799,
    discount: "44% OFF",
    rating: 4.5,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Men's Denim Jacket",
    category: "Jackets",
    price: 1299,
    oldPrice: 2199,
    discount: "41% OFF",
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Formal White Shirt",
    category: "Formal",
    price: 799,
    oldPrice: 1399,
    discount: "43% OFF",
    rating: 4.4,
    reviews: 198,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Casual Polo T-Shirt",
    category: "T-Shirts",
    price: 599,
    oldPrice: 999,
    discount: "40% OFF",
    rating: 4.5,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = [
  "All",
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Jackets",
  "Formal",
];

export default function MenPage() {
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
          Men's Fashion
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Discover shirts, t-shirts, jeans, jackets and more
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