"use client";

import Link from "next/link";
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from "lucide-react";

export default function WishlistPage() {
  const wishlistProducts = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 799,
      oldPrice: 1499,
      discount: "47% OFF",
      rating: 4.5,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Elegant Handbag",
      price: 699,
      oldPrice: 1299,
      discount: "46% OFF",
      rating: 4.6,
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Classic White Sneakers",
      price: 1299,
      oldPrice: 2199,
      discount: "41% OFF",
      rating: 4.4,
      reviews: 214,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 FREE DELIVERY ON ORDERS ABOVE ₹999
      </div>

      {/* NAVBAR */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold"
          >
            Style<span className="text-pink-600">Cart</span>
          </Link>

          <div className="flex items-center gap-6">

            <Link
              href="/wishlist"
              className="flex flex-col items-center text-pink-600"
            >
              <Heart size={22} fill="currentColor" />
              <span className="text-xs mt-1 hidden md:block">
                Wishlist
              </span>
            </Link>

            <Link
              href="/cart"
              className="flex flex-col items-center hover:text-pink-600"
            >
              <ShoppingCart size={22} />
              <span className="text-xs mt-1 hidden md:block">
                Cart
              </span>
            </Link>

          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-5 py-8">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Heart size={30} className="text-pink-600" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              My Wishlist
            </h1>

            <p className="text-gray-500 mt-1">
              3 items saved
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {wishlistProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative h-64">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                <button
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                  title="Remove from wishlist"
                >
                  <Trash2
                    size={18}
                    className="text-red-500"
                  />
                </button>

                <span className="absolute bottom-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>

              </div>

              {/* DETAILS */}
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

                  <span className="font-bold text-lg">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>

                </div>

                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}