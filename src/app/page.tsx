import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Haircut', description: "A men's haircut can vary greatly, with a range of different styles to choose from." },
    { title: 'Straight Razor Shave', description: 'A straight razor shave is an age-old barbershop tradition and a classic haircut experience.' },
    { title: 'Line Up / Beard Trim', description: 'Beard trimming is an important grooming service. It helps keep facial hair looking neat and presentable.' },
  ];

  const reviews = [
    { name: 'Greg Sefain', text: "Hands down the best cut I have ever had. Devin is very attentive to your vision with your hair and how you want it styled." },
    { name: 'Local Customer', text: "Professional service, clean shop, and consistent quality. The best barbershop in the Conejo Valley area." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 font-semibold mb-4 tracking-wider uppercase">Partnering with Masters • Fresh Since 2015</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Traditional Barbershop<br />in Conejo Valley
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For men needing the perfect haircut, we offer the perfect barbershop experience. Expert haircuts, fades, and straight razor shaves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-amber-500 text-zinc-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-lg"
            >
              Book An Appointment
            </Link>
            <a
              href="tel:+18057197522"
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 hover:text-zinc-900 transition-colors text-lg"
            >
              Call (805) 719-7522
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">A Traditional Barber & Shop</h2>
              <p className="text-gray-400 text-lg mb-6">
                We provide the amenities and atmosphere for an optimal haircut and shave. Experienced barbers are experts in haircut styles, fades, designs, and shaves to give clients their desired look.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                This classic male experience also includes frills such as hot lather face shaves, razor edging, facial massages and other comfort services along with grooming products specially made for males.
              </p>
              <Link href="/about" className="text-amber-500 font-semibold hover:text-amber-400 transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-amber-500 font-semibold mb-4">Shop Location</h3>
              <p className="text-white text-xl mb-2">60 Houston Dr.</p>
              <p className="text-gray-400 mb-6">Thousand Oaks, CA 91360</p>
              <h3 className="text-amber-500 font-semibold mb-4">Hours</h3>
              <p className="text-gray-400">Monday – Friday: 10am – 7pm</p>
              <p className="text-gray-400">Saturday: 10am – 5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider">Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800 rounded-xl p-8 hover:bg-zinc-750 transition-colors">
                <h3 className="text-xl font-bold text-amber-500 mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-amber-500 text-zinc-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Hear from our happy customers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-zinc-900 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">{review.name}</p>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Book A Chair</h2>
          <p className="text-xl text-zinc-800 mb-8">
            Get that look you&apos;ve always wanted just right!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
            >
              Make An Appointment
            </Link>
            <a
              href="tel:+18057197522"
              className="border-2 border-zinc-900 text-zinc-900 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Call (805) 719-7522
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
