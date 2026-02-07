const benefits = [
  "2 to 4 cleaning services per unit per year",
  "10% discount on your first cleaning service",
  "10% discount on all repair services",
  "10% discount on new replacement units",
];

export default function MaintenancePlan() {
  return (
    <section id="maintenance" className="bg-gradient-to-br from-primary-50 to-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl sm:grid sm:grid-cols-2">
          <div className="bg-primary-700 p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Aircon Maintenance Plan
            </h2>
            <p className="mt-3 text-primary-100">
              Customized just for you. Whether you have lightly or heavily used aircon units, protect and save with our plan.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              Get an instant quote & subscribe
            </a>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="rounded-xl border border-primary-100 bg-gradient-to-b from-white to-primary-50/30 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Peace of mind
              </h3>
              <p className="mt-3 text-slate-700 leading-relaxed">
                Regular maintenance keeps your units running efficiently and extends their life—saving you money and keeping your home cool. Less breakdowns, less stress.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>Tipid sa kuryente—clean units use less power</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>Comfort for the whole family, all year round</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>One less worry—we take care of it for you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
