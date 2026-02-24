import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ShowroomPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Our Showroom
            </h1>
            <p className="text-gray-700 max-w-2xl">
              Visit our showroom to see our complete collection in person
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Location & Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-4">Paper Store Showroom</h3>
                  <p className="text-gray-700 mb-2">123 Paper Street</p>
                  <p className="text-gray-700 mb-6">New York, NY 10001</p>

                  <h4 className="font-heading font-bold mb-4">Hours</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 5:00 PM</li>
                    <li>Sunday: 12:00 PM - 4:00 PM</li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Map would be displayed here</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Schedule a Visit
              </h3>
              <p className="text-gray-700 mb-6">
                Want a private tour? Contact us to book an appointment with one of our specialists.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
