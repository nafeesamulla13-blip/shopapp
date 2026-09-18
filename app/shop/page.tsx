"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronRight,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const products = [
  {
    name: "Floral Summer Dress",
    category: "Women",
    price: 799,
    oldPrice: 1499,
    discount: "47% OFF",
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Women's Casual Top",
    category: "Women",
    price: 499,
    oldPrice: 899,
    discount: "44% OFF",
    rating: 4.3,
    reviews: 82,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Classic White Sneakers",
    category: "Footwear",
    price: 1299,
    oldPrice: 2199,
    discount: "41% OFF",
    rating: 4.4,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Classic Casual Shirt",
    category: "Men",
    price: 699,
    oldPrice: 1199,
    discount: "42% OFF",
    rating: 4.5,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Premium Black T-Shirt",
    category: "Men",
    price: 499,
    oldPrice: 899,
    discount: "44% OFF",
    rating: 4.4,
    reviews: 218,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Elegant Handbag",
    category: "Accessories",
    price: 699,
    oldPrice: 1299,
    discount: "46% OFF",
    rating: 4.6,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Stylish Sunglasses",
    category: "Accessories",
    price: 399,
    oldPrice: 799,
    discount: "50% OFF",
    rating: 4.5,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Premium Watch",
    category: "Accessories",
    price: 1199,
    oldPrice: 2499,
    discount: "52% OFF",
    rating: 4.6,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Trendy Backpack",
    category: "Accessories",
    price: 899,
    oldPrice: 1599,
    discount: "44% OFF",
    rating: 4.4,
    reviews: 103,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Summer Dress",
    category: "Kids",
    price: 599,
    oldPrice: 999,
    discount: "40% OFF",
    rating: 4.6,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kids Casual T-Shirt",
    category: "Kids",
    price: 399,
    oldPrice: 699,
    discount: "43% OFF",
    rating: 4.4,
    reviews: 114,
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = [
  {
    name: "Women",
    link: "/women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Men",
    link: "/men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kids",
    link: "/kids",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Footwear",
    link: "/footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Accessories",
    link: "/accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const text = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-black text-white text-center py-2 text-sm">
        🎉 FLAT ₹200 OFF on orders above ₹1499 • Use code: STYLE200
      </div>

      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center gap-5">
            <Link
              href="/shop"
              className="text-2xl md:text-3xl font-extrabold whitespace-nowrap"
            >
              Style<span className="text-pink-600">Cart</span>
            </Link>

            <div className="flex-1 hidden sm:block">
              <div className="w-full max-w-2xl mx-auto flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search size={20} className="text-gray-500" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search for shirts, dresses, shoes..."
                  className="bg-transparent outline-none w-full ml-3 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/wishlist"
                className="flex flex-col items-center hover:text-pink-600"
              >
                <Heart size={22} />
                <span className="text-xs hidden md:block">
                  Wishlist
                </span>
              </Link>

              <Link
                href="/cart"
                className="flex flex-col items-center hover:text-pink-600"
              >
                <ShoppingCart size={22} />
                <span className="text-xs hidden md:block">
                  Cart
                </span>
              </Link>

              <Link
                href="/"
                className="flex flex-col items-center hover:text-pink-600"
              >
                <User size={22} />
                <span className="text-xs hidden md:block">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="sm:hidden bg-white px-5 pb-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
          <Search size={20} className="text-gray-500" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full ml-3"
          />
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-center gap-8 md:gap-14 py-4 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="font-semibold text-sm whitespace-nowrap hover:text-pink-600"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {search.trim() !== "" ? (
        <section className="max-w-7xl mx-auto px-5 py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Search Results
          </h1>

          <p className="text-gray-500 mb-7">
            {filteredProducts.length} product(s) found for "
            {search}"
          </p>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center">
              <Search
                size={45}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-xl font-bold mt-4">
                No products found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching for shirts, dresses, shoes or bags.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="max-w-7xl mx-auto px-5 py-6">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-14">
                  <p className="text-pink-600 font-bold uppercase text-sm">
                    New Season Collection
                  </p>

                  <h1 className="text-4xl md:text-6xl font-extrabold mt-3">
                    Style that
                    <br />
                    speaks for you.
                  </h1>

                  <p className="text-gray-600 mt-5 text-lg">
                    Discover fashion, footwear and accessories at amazing
                    prices.
                  </p>

                  <Link
                    href="/women"
                    className="inline-flex items-center gap-2 mt-7 bg-black text-white px-7 py-3.5 rounded-lg font-semibold"
                  >
                    Shop Now
                    <ChevronRight size={18} />
                  </Link>
                </div>

                <div className="h-72 md:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
                    alt="Fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-5 py-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-1 mb-6">
              Find your perfect style
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.link}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg"
                >
                  <div className="h-40 md:h-52">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-bold">
                      {category.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Explore now →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-5 py-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Feature
                icon={<Truck size={30} />}
                title="Free Delivery"
                text="On orders above ₹999"
              />

              <Feature
                icon={<ShieldCheck size={30} />}
                title="Secure Payments"
                text="100% secure checkout"
              />

              <Feature
                icon={<RotateCcw size={30} />}
                title="Easy Returns"
                text="Simple return policy"
              />
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-5 py-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Trending Now 🔥
            </h2>

            <p className="text-gray-500 mt-1 mb-6">
              Popular picks you'll love
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {products.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                />
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-5 pb-12">
            <div className="rounded-2xl bg-black text-white p-8 md:p-12 text-center">
              <p className="text-pink-400 font-bold">
                LIMITED TIME OFFER
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Up to 50% OFF
              </h2>

              <p className="text-gray-300 mt-3">
                Upgrade your wardrobe without breaking the bank.
              </p>

              <Link
                href="/women"
                className="inline-block mt-6 bg-white text-black px-7 py-3 rounded-lg font-bold"
              >
                Explore Deals
              </Link>
            </div>
          </section>
        </>
      )}

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-5 py-8 text-center">
          <h2 className="text-2xl font-extrabold">
            Style<span className="text-pink-600">Cart</span>
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Fashion made simple, stylish and affordable.
          </p>

          <p className="text-gray-400 text-sm mt-6">
            © 2026 StyleCart. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="relative h-56 md:h-72 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:text-pink-600">
          <Heart size={19} />
        </button>

        <span className="absolute bottom-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400">
          {product.category}
        </p>

        <h3 className="font-semibold mt-1 truncate">
          {product.name}
        </h3>

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

        <button className="w-full mt-4 bg-black text-white py-2.5 rounded-lg font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-xl p-5 flex items-center gap-4">
      {icon}

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}