import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid, Product } from "@/components/ProductGrid";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Premium White Paper",
    price: 24.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "2",
    name: "Luxury Card Stock",
    price: 34.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "3",
    name: "Textured Cardboard",
    price: 29.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: "4",
    name: "Glossy Paper Pack",
    price: 19.99,
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Premium Paper Solutions
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our collection of high-quality papers and cutting supplies for your creative projects
              </p>
            </div>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully selected materials that meet the highest standards
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">
                  Fast Shipping
                </h3>
                <p className="text-gray-600">
                  Quick and reliable delivery to your doorstep
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Our team is here to help with any questions
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
