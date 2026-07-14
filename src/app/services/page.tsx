import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Barbershop services in Thousand Oaks: haircuts, fades, beard trims, straight razor shaves, kids cuts, and more.',
};

export default function ServicesPage() {
  const services = [
    { title: 'Haircut', description: "A men's haircut can vary greatly, with a range of different styles to choose from." },
    { title: 'Kids Cut / Buzz Cut / Afro Shaping', description: "We offer a variety of hair cuts, including kids cut/buzz cut, Afro shaping and more. Our highly skilled barbers are trained in all the latest trends." },
    { title: 'Clean Up / Seniors / Students', description: 'Our services are tailored to each client\'s individual needs and desires.' },
    { title: 'Straight Razor Shave', description: 'A straight razor shave is an age-old barbershop tradition and a classic haircut experience.' },
    { title: 'Line Up / Beard Trim', description: 'Beard trimming is an important grooming service. It helps keep facial hair looking neat and presentable.' },
    { title: 'Facial – Scrub & Black Mask', description: 'Consists of facial cleanse, exfoliating scrub, facial massage & mask with hot towels.' },
    { title: 'Enhancements', description: 'Colors available are black and brown.' },
  ];

  const faqs = [
    { question: 'Is there any wait time for haircut appointments?', answer: 'We operate by appointment to minimize wait times. Book ahead to secure your preferred time slot.' },
    { question: 'How experienced are your barbers?', answer: 'Our barbers are highly experienced professionals with years of expertise. They are known for their efficiency, attention to detail, and friendly service.' },
    { question: 'What services does the barbershop offer?', answer: 'We provide a variety of services including hair cuts, beard trims and shaves. We also offer hot towel shaves as well as facial treatments.' },
    { question: 'Do you offer services such as beard trims, buzz cuts, or other specialized haircuts?', answer: 'Yes, we offer all of these services and more. Check out our full service list above.' },
    { question: 'Are there any specials or discounts available?', answer: 'Yes, please sign up for our newsletter to get special discounts and stay updated on promotions.' },
  ];

  return (
    <>
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Services</h1>
          <Link href="/book" className="inline-block bg-amber-500 text-zinc-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
            Book An Appointment
          </Link>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-8 hover:bg-zinc-800 transition-colors">
                <h3 className="text-xl font-bold text-amber-500 mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold mb-2 uppercase tracking-wider text-center">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-zinc-800 rounded-xl group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Book An Appointment</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
              Make An Appointment
            </Link>
            <a href="tel:+18057197522" className="border-2 border-zinc-900 text-zinc-900 px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 hover:text-white transition-colors">
              Call (805) 719-7522
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
