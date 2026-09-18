"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  User,
  Phone,
  Mail,
  Lock,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");

    if (!name.trim()) {
      setMessage("Please enter your full name.");
      return;
    }

    if (phone.length !== 10) {
      setMessage(
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setMessage(
        "Password must be at least 6 characters."
      );
      return;
    }

    setLoading(true);

    localStorage.setItem(
      "stylecart_logged_in",
      "true"
    );

    localStorage.setItem(
      "stylecart_name",
      name
    );

    localStorage.setItem(
      "stylecart_phone",
      phone
    );

    localStorage.setItem(
      "stylecart_email",
      email
    );

    setMessage("Login successful! 🎉");

    setTimeout(() => {
      router.push("/shop");
    }, 700);
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <ShoppingBag
                size={32}
                className="text-white"
              />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold">
            Style<span className="text-pink-600">
              Cart
            </span>
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue shopping
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-7 md:p-8">

          <h2 className="text-2xl font-bold mb-2">
            Welcome to StyleCart 👋
          </h2>

          <p className="text-gray-500 text-sm mb-7">
            Enter your details to access your account.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>
              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your full name"
                  required
                  className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

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
                  placeholder="10-digit mobile number"
                  required
                  className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  required
                  className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Minimum 6 characters"
                  required
                  className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {message && (
              <div
                className={`text-sm font-semibold text-center p-3 rounded-lg ${
                  message.includes("successful")
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3.5 rounded-lg font-bold hover:bg-gray-800 disabled:opacity-60"
            >
              {loading
                ? "Logging in..."
                : "Login & Continue"}
            </button>

          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            By continuing, you agree to StyleCart's
            terms and privacy policy.
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          🛍️ Your shopping journey starts here
        </p>

      </div>
    </main>
  );
}