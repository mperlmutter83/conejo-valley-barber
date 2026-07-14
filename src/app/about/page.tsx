import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Conejo Valley Barber - serving the Conejo Valley since 2015. Traditional barbershop where craftsmanship meets modern style.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-2xl text-amber-500">Conejo Valley Barber Co. – Est. 2015</p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-lg mb-6">
            For men needing the perfect haircut, we offer the perfect barbershop experience. We provide the amenities and atmosphere for an optimal haircut and shave.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Experienced barbers are experts in haircut styles, fades, designs, and shaves to give clients their desired look. This classic male experience also includes frills such as hot lather face shaves, razor edging, facial massages and other comfort services along with grooming products specially made for males.
          </p>
          <p className="text-gray-300 text-lg">
            With a reliable haircut from an experienced barber, you can look your best for any occasion.
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider">Our Story</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Established in Los Angeles in 2015</h2>
          <p className="text-gray-300 text-lg mb-6">
            Eli is a talented barber who has been proudly serving clients for over 15 years. He is known for his professional haircutting skills, which have made him popular among loyal customers.
          </p>
          <p className="text-gray-300 text-lg">
            Potential clients can find a wide range of haircut options at our barbershop, from stylish fades to classic cuts – whatever the look, we know how to make it happen with precision and care. With so much expertise, it&apos;s easy to see why our haircut game is so strong!
          </p>
        </div>
      </section>

      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Ready for a Fresh Cut?</h2>
          <p className="text-xl text-zinc-800 mb-8">Book your appointment today and experience the difference.</p>
          <Link
            href="/book"
            className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
