import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function WholesalePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Wholesale Program
            </h1>
            <p className="text-gray-700 max-w-2xl">
              Special pricing and benefits for bulk orders and business partners
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">20%</div>
                <h3 className="font-heading font-bold text-xl mb-2">Bulk Discount</h3>
                <p className="text-gray-600">On orders of 50+ units</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">40%</div>
                <h3 className="font-heading font-bold text-xl mb-2">Volume Discount</h3>
                <p className="text-gray-600">On orders of 200+ units</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">Free</div>
                <h3 className="font-heading font-bold text-xl mb-2">Shipping</h3>
                <p className="text-gray-600">On all wholesale orders</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Join Our Wholesale Program
              </h2>
              <p className="text-gray-700 mb-6">
                Get exclusive pricing, dedicated support, and special benefits. Contact our wholesale team to get started.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Contact Wholesale Team
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
