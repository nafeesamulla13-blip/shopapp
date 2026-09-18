"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

type Product = {
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  function addToWishlist() {
    const existing = JSON.parse(
      localStorage.getItem("stylecart_wishlist") || "[]"
    );

    const alreadyExists = existing.some(
      (item: Product) => item.name === product.name
    );

    if (!alreadyExists) {
      localStorage.setItem(
        "stylecart_wishlist",
        JSON.stringify([...existing, product])
      );
      setLiked(true);
    } else {
      const updated = existing.filter(
        (item: Product) => item.name !== product.name
      );

      localStorage.setItem(
        "stylecart_wishlist",
        JSON.stringify(updated)
      );
      setLiked(false);
    }
  }

  function addToCart() {
    const existing = JSON.parse(
      localStorage.getItem("stylecart_cart") || "[]"
    );

    const alreadyExists = existing.some(
      (item: Product) => item.name === product.name
    );

    if (!alreadyExists) {
      localStorage.setItem(
        "stylecart_cart",
        JSON.stringify([...existing, product])
      );
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="relative h-60 md:h-72 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <button
          onClick={addToWishlist}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:text-pink-600"
        >
          <Heart
            size={20}
            fill={liked ? "currentColor" : "none"}
            className={liked ? "text-pink-600" : ""}
          />
        </button>

        <span className="absolute bottom-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-semibold truncate">
          {product.name}
        </h2>

        <div className="flex items-center gap-2 mt-2">
          <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded">
            {product.rating} ★
          </span>

          <span className="text-xs text-gray-500">
            {product.reviews} reviews
          </span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        <button
          onClick={addToCart}
          className="w-full mt-4 bg-black text-white py-2.5 rounded-lg font-semibold hover:bg-gray-800"
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>

        <Link
          href="/cart"
          className="block text-center text-sm text-pink-600 mt-3"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}