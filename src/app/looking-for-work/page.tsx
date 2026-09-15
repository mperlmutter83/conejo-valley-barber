import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(805) 719-7522';
const PHONE_HREF = 'tel:+18057197522';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for barber work in the Conejo Valley? Local barbershops are hiring. Fill out the quick form and we'll connect you — or call (805) 719-7522.",
  alternates: { canonical: 'https://conejovalleybarber.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local barbershops that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested shops contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Haircuts',
  'Fades',
  'Beard Trims',
  'Line-Ups',
  'Hot Towel Shaves',
  'Kids Cuts',
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">Looking for Work?</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Barber Work in Conejo Valley
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-400">
            Local barbershops are growing and looking for dependable barbers. Tell us about
            yourself and we&apos;ll connect you with shops that are hiring — free, fast, and no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block bg-amber-500 text-zinc-900 px-7 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block rounded-lg border-2 border-amber-500 px-7 py-3 font-semibold text-amber-500 hover:bg-amber-500/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-zinc-900">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-white text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
            Barbershops across the Conejo Valley hire for a range of barber work, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-gray-300 font-medium"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white text-center">Apply in 60 Seconds</h2>
          <p className="mt-2 text-center text-gray-400">
            Free and confidential — we&apos;ll only share your details with shops that are hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-gray-400">
          Own a barbershop and need reliable barbers?{' '}
          <a href={PHONE_HREF} className="font-bold text-amber-500 underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
