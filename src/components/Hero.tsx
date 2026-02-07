import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-cold-navy text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Professional Aircon Technicians
          </h1>
          <p className="mt-4 text-lg text-primary-100 sm:text-xl">
            Affordable and trusted aircon technician to your door. Serving Metro Manila and nearby areas with malasakit service.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#book"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-700 shadow-lg transition hover:bg-primary-50"
            >
              Book a Service
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-lg border-2 border-white/80 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
