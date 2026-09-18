"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

type CartItem = {
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
};

type CartProduct = CartItem & {
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("stylecart_cart") || "[]"
    );

    const cartWithQuantity = savedCart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCart(cartWithQuantity);
  }, []);

  function saveCart(updatedCart: CartProduct[]) {
    setCart(updatedCart);

    localStorage.setItem(
      "stylecart_cart",
      JSON.stringify(updatedCart)
    );
  }

  function increaseQuantity(name: string) {
    const updatedCart = cart.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    saveCart(updatedCart);
  }

  function decreaseQuantity(name: string) {
    const updatedCart = cart
      .map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updatedCart);
  }

  function removeItem(name: string) {
    const updatedCart = cart.filter(
      (item) => item.name !== name
    );

    saveCart(updatedCart);
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const oldTotal = cart.reduce(
    (sum, item) =>
      sum + item.oldPrice * item.quantity,
    0
  );

  const savings = oldTotal - total;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* OFFER BAR */}
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 FLAT ₹200 OFF on orders above ₹1499 • Use code: STYLE200
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

          <div className="flex items-center gap-5">
            <Link href="/wishlist">
              <Heart size={23} />
            </Link>

            <Link
              href="/cart"
              className="text-pink-600"
            >
              <ShoppingCart size={23} />
            </Link>
          </div>
        </div>
      </nav>

      {/* CART */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 mb-7"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold">
          My Cart
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          {cart.length === 0
            ? "Your cart is empty"
            : `${cart.length} product${
                cart.length > 1 ? "s" : ""
              } in your cart`}
        </p>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <ShoppingCart
              size={60}
              className="mx-auto text-gray-300 mb-5"
            />

            <h2 className="text-2xl font-bold mb-2">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-6">
              Add some products to your cart and they
              will appear here.
            </p>

            <Link
              href="/"
              className="inline-block bg-black text-white px-7 py-3 rounded-lg font-semibold"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-7">
            {/* PRODUCTS */}
            <div className="lg:col-span-2 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl shadow-sm p-4 md:p-5"
                >
                  <div className="flex gap-4">
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-32 md:w-36 md:h-40 object-cover rounded-xl"
                    />

                    {/* DETAILS */}
                    <div className="flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <h2 className="font-bold text-lg">
                            {item.name}
                          </h2>

                          <p className="text-sm text-gray-500 mt-1">
                            {item.category}
                          </p>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeItem(item.name)
                          }
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      {/* RATING */}
                      <div className="flex items-center gap-2 mt-3">
                        <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded">
                          {item.rating} ★
                        </span>

                        <span className="text-xs text-gray-500">
                          {item.reviews} reviews
                        </span>
                      </div>

                      {/* PRICE */}
                      <div className="flex items-center gap-3 mt-3">
                        <span className="font-bold text-lg">
                          ₹{item.price}
                        </span>

                        <span className="text-gray-400 line-through">
                          ₹{item.oldPrice}
                        </span>

                        <span className="text-green-600 text-sm font-semibold">
                          {item.discount}
                        </span>
                      </div>

                      {/* QUANTITY */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.name
                              )
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="px-4 font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.name
                              )
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <span className="font-bold">
                          ₹
                          {item.price *
                            item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PRICE DETAILS */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-5">
                  Price Details
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Original Price</span>
                    <span>₹{oldTotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount</span>

                    <span className="text-green-600">
                      -₹{savings}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery</span>

                    <span className="text-green-600">
                      FREE
                    </span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>

                    <span>₹{total}</span>
                  </div>
                </div>

                {/* PROCEED TO CHECKOUT */}
                <Link
                  href="/checkout"
                  className="block w-full bg-black text-white py-3 rounded-lg font-semibold mt-6 text-center hover:bg-gray-800"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/"
                  className="block text-center text-sm text-pink-600 mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}