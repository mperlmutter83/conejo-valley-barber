import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import HoursLines from '@/components/HoursLines';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Conejo Valley Barber. Call (805) 719-7522 or visit us at 60 Houston Dr, Thousand Oaks, CA 91360.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-amber-500">Appointments Only</p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Visit</h3>
                  <p className="text-white text-xl">60 Houston Dr.</p>
                  <p className="text-gray-400">Thousand Oaks, CA 91360</p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Contact</h3>
                  <p className="text-white text-xl mb-2">
                    <a href="tel:+18057197522" className="hover:text-amber-500 transition-colors">(805) 719-7522</a>
                  </p>
                  <p className="text-gray-400">
                    <a href="mailto:info@conejovalleybarber.com" className="hover:text-amber-500 transition-colors">info@conejovalleybarber.com</a>
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-8">
                  <h3 className="text-amber-500 font-semibold mb-4">Hours</h3>
                  <HoursLines className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
