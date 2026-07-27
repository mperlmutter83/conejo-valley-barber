import Link from 'next/link';
import HoursLines from '@/components/HoursLines';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-amber-500 mb-4">Conejo Valley Barber</h3>
            <p className="text-gray-400 mb-4">
              A traditional barbershop where craftsmanship meets modern style. Serving the Conejo Valley since 2015.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:+18057197522" className="hover:text-amber-500 transition-colors">
                  (805) 719-7522
                </a>
              </p>
              <p>
                <a href="mailto:info@conejovalleybarber.com" className="hover:text-amber-500 transition-colors">
                  info@conejovalleybarber.com
                </a>
              </p>
              <p>60 Houston Dr.<br />Thousand Oaks, CA 91360</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-amber-500 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Open Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <HoursLines as="li" />
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Conejo Valley Barber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
