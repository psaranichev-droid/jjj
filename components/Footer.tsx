"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-white font-bold mb-4">Paper Store</h3>
            <p className="text-sm">Premium quality papers and cutting supplies for professionals.</p>
          </div>

          <div>
            <h4 className="font-heading text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cutting" className="hover:text-white">Cutting Services</Link></li>
              <li><Link href="/designer-paper" className="hover:text-white">Designer Paper</Link></li>
              <li><Link href="/showroom" className="hover:text-white">Showroom</Link></li>
              <li><Link href="/wholesale" className="hover:text-white">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">About Us</Link></li>
              <li><Link href="/" className="hover:text-white">Contact</Link></li>
              <li><Link href="/" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@paperstore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Paper St, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2025 Paper Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
