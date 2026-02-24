import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid, Product } from "@/components/ProductGrid";

const cuttingProducts: Product[] = [
  {
    id: "cut-1",
    name: "Professional Cutting Mat",
    price: 49.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "cut-2",
    name: "Precision Cutter Set",
    price: 39.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "cut-3",
    name: "Rotary Cutter Pro",
    price: 29.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "cut-4",
    name: "Safety Ruler Set",
    price: 19.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function CuttingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Cutting Services & Tools
            </h1>
            <p className="text-gray-700 max-w-2xl">
              Professional-grade cutting equipment and services for your creative needs
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12">
              Featured Tools
            </h2>
            <ProductGrid products={cuttingProducts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
