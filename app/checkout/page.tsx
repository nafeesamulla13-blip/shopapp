"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle,
  CreditCard,
  Banknote,
} from "lucide-react";

type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("stylecart_cart") || "[]"
    );

    setCart(savedCart);
  }, []);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  function placeOrder(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (pincode.length !== 6) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setOrderPlaced(true);

    localStorage.removeItem("stylecart_cart");
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-5 py-4">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-extrabold"
            >
              Style<span className="text-pink-600">Cart</span>
            </Link>
          </div>
        </nav>

        <section className="max-w-xl mx-auto px-5 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-10">
            <CheckCircle
              size={80}
              className="mx-auto text-green-600 mb-6"
            />

            <h1 className="text-3xl font-bold mb-3">
              Order Placed Successfully! 🎉
            </h1>

            <p className="text-gray-500 mb-2">
              Thank you for shopping with StyleCart.
            </p>

            <p className="text-gray-500 mb-8">
              Your order will be delivered to:
            </p>

            <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
              <p className="font-semibold">{name}</p>

              <p>{address}</p>

              <p>
                {city}, {state} - {pincode}
              </p>

              <p className="mt-1">
                Phone: {phone}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-gray-500 text-sm">
                Payment Method
              </p>

              <p className="font-bold mt-1">
                {paymentMethod === "cod"
                  ? "💵 Cash on Delivery"
                  : "💳 Online Payment"}
              </p>
            </div>

            <p className="font-bold text-lg mb-6">
              Order Total: ₹{total}
            </p>

            <Link
              href="/"
              className="inline-block bg-black text-white px-7 py-3 rounded-lg font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    );
  }

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

          <Link href="/cart">
            <ShoppingCart size={23} />
          </Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-5 py-8">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-gray-600 mb-7"
        >
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Checkout
        </h1>

        <p className="text-gray-500 mb-8">
          Enter your delivery details and select your
          payment method.
        </p>

        <div className="grid lg:grid-cols-3 gap-7">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <form
              onSubmit={placeOrder}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
            >
              {/* DELIVERY DETAILS */}
              <h2 className="text-xl font-bold mb-6">
                Delivery Address
              </h2>

              <div className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="block font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10)
                      )
                    }
                    placeholder="Enter 10-digit mobile number"
                    required
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* ADDRESS */}
                <div>
                  <label className="block font-semibold mb-2">
                    Full Address
                  </label>

                  <textarea
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    placeholder="House/Flat No., Street, Area, Landmark"
                    required
                    rows={4}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  />
                </div>

                {/* CITY + STATE */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      value={city}
                      onChange={(e) =>
                        setCity(e.target.value)
                      }
                      placeholder="Enter city"
                      required
                      className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      value={state}
                      onChange={(e) =>
                        setState(e.target.value)
                      }
                      placeholder="Enter state"
                      required
                      className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                {/* PIN */}
                <div>
                  <label className="block font-semibold mb-2">
                    PIN Code
                  </label>

                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                      )
                    }
                    placeholder="Enter 6-digit PIN code"
                    required
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* PAYMENT METHOD */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-5">
                  Payment Method
                </h2>

                <div className="space-y-4">
                  {/* COD */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("cod")
                    }
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition ${
                      paymentMethod === "cod"
                        ? "border-black bg-gray-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                      <Banknote
                        size={23}
                        className="text-green-600"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-bold">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your order is delivered
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <div className="w-2.5 h-2.5 bg-black rounded-full" />
                      )}
                    </div>
                  </button>

                  {/* ONLINE PAYMENT */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("online")
                    }
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition ${
                      paymentMethod === "online"
                        ? "border-black bg-gray-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                      <CreditCard
                        size={23}
                        className="text-blue-600"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-bold">
                        Online Payment
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay securely online
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "online"
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {paymentMethod === "online" && (
                        <div className="w-2.5 h-2.5 bg-black rounded-full" />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* PLACE ORDER */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3.5 rounded-lg font-bold mt-8 hover:bg-gray-800"
              >
                Place Order • ₹{total}
              </button>
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Qty: {item.quantity || 1}
                      </p>

                      <p className="font-bold mt-1">
                        ₹
                        {item.price *
                          (item.quantity || 1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="my-5" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>₹{total}</span>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Payment:{" "}
                <span className="font-semibold text-black">
                  {paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : "Online Payment"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}