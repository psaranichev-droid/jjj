import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid, Product } from "@/components/ProductGrid";

const designerPapers: Product[] = [
  {
    id: "design-1",
    name: "Artistic Watercolor Paper",
    price: 44.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "design-2",
    name: "Contemporary Kraft",
    price: 24.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "design-3",
    name: "Metallic Finish Collection",
    price: 54.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "design-4",
    name: "Eco-Friendly Natural",
    price: 32.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function DesignerPaperPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Designer Paper Collection
            </h1>
            <p className="text-gray-700 max-w-2xl">
              Unique and artistic papers for professionals and enthusiasts
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12">
              Curated Selection
            </h2>
            <ProductGrid products={designerPapers} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
