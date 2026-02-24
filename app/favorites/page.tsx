"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, addToCart } = useStore();

  const handleAddToCart = (item: (typeof favorites)[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">
            Favorites
          </h1>

          {favorites.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600 mb-6">You haven&apos;t added anything to favorites yet</p>
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex-grow bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Cart
                      </button>
                      <button
                        onClick={() => removeFromFavorites(item.id)}
                        className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
