"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Kids Summer Dress",
    category: "Dresses",
    price: 599,
    oldPrice: 999,
    discount: "40% OFF",
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Party Dress",
    category: "Dresses",
    price: 799,
    oldPrice: 1299,
    discount: "38% OFF",
    rating: 4.7,
    reviews: 132,
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Casual T-Shirt",
    category: "T-Shirts",
    price: 399,
    oldPrice: 699,
    discount: "43% OFF",
    rating: 4.5,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Denim Jeans",
    category: "Jeans",
    price: 699,
    oldPrice: 1099,
    discount: "36% OFF",
    rating: 4.4,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Shorts",
    category: "Shorts",
    price: 349,
    oldPrice: 599,
    discount: "42% OFF",
    rating: 4.5,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Hoodie",
    category: "Jackets",
    price: 699,
    oldPrice: 1199,
    discount: "42% OFF",
    rating: 4.6,
    reviews: 121,
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = [
  "All",
  "Dresses",
  "T-Shirts",
  "Jeans",
  "Shorts",
  "Jackets",
];

export default function KidsPage() {
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
          Kids Fashion
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Cute and comfortable fashion for kids
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