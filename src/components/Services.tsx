const services = [
  {
    title: "Repair and part replacement",
    description: "Fast diagnosis and quality repairs. We use genuine or compatible parts to get your unit running again.",
    icon: "🔧",
  },
  {
    title: "Cleaning and maintenance",
    description: "Deep cleaning and preventive maintenance to improve cooling and extend the life of your aircon.",
    icon: "✨",
  },
  {
    title: "Installation and relocation",
    description: "Professional installation and safe relocation of window, split, and other unit types.",
    icon: "📦",
  },
  {
    title: "Dismantling",
    description: "Safe removal and disposal of old units when you upgrade or move.",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Aircon Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From cleaning to installation, we deliver professional service with a smile.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>{service.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#book"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Check pricing & book
          </a>
        </div>
      </div>
    </section>
  );
}
