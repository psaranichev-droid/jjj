"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } =
    useStore();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="relative aspect-square bg-gray-200 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => handleToggleFavorite(product)}
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart
                className="w-5 h-5"
                fill={isFavorite(product.id) ? "currentColor" : "none"}
                color={isFavorite(product.id) ? "red" : "gray"}
              />
            </button>
          </div>

          <div className="p-4">
            <h3 className="font-heading font-bold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-gray-900 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
