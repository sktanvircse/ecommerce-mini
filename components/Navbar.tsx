"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🛒 E-Shop
        </Link>
        <div className="flex gap-6 text-gray-700">
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
          <Link href="/checkout" className="hover:text-blue-600 transition-colors">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}
