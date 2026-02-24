"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600 mb-6">Your cart is empty</p>
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 p-6 flex gap-6"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-heading font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)} each
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-2 border border-gray-300 rounded">
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 hover:bg-gray-100"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateCartQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 hover:bg-gray-100"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-heading font-bold text-lg text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 h-fit">
                <h2 className="font-heading font-bold text-lg mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-heading font-bold text-lg">
                    <span>Total</span>
                    <span>${(total + 10).toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Proceed to Checkout
                </button>
                <Link
                  href="/"
                  className="block text-center mt-4 text-blue-600 hover:text-blue-700"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
