import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Cleaning & Maintenance", href: "#services" },
    { label: "Repair & Parts", href: "#services" },
    { label: "Installation", href: "#services" },
    { label: "Maintenance Plan", href: "#maintenance" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Service", href: "#book" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo/cold-army-darkbblue-bg.png"
                alt="Cold Army Aircon Specialist"
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Your trusted aircon specialists in the Philippines. Professional cleaning, repair, and installation with malasakit service.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cold Army Aircon Specialist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
