"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export function Header() {
  const { cart, favorites } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const favoritesCount = favorites.length;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading text-2xl font-bold text-gray-900">
            Paper Store
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/cutting" className="text-gray-700 hover:text-gray-900">
              Cutting
            </Link>
            <Link href="/designer-paper" className="text-gray-700 hover:text-gray-900">
              Designer Paper
            </Link>
            <Link href="/showroom" className="text-gray-700 hover:text-gray-900">
              Showroom
            </Link>
            <Link href="/wholesale" className="text-gray-700 hover:text-gray-900">
              Wholesale
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/favorites"
              className="relative p-2 text-gray-700 hover:text-gray-900"
            >
              <Heart className="w-6 h-6" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-gray-900"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/cutting" className="text-gray-700 hover:text-gray-900">
                Cutting
              </Link>
              <Link href="/designer-paper" className="text-gray-700 hover:text-gray-900">
                Designer Paper
              </Link>
              <Link href="/showroom" className="text-gray-700 hover:text-gray-900">
                Showroom
              </Link>
              <Link href="/wholesale" className="text-gray-700 hover:text-gray-900">
                Wholesale
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
