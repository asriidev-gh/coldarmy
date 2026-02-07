import Image from "next/image";

const brands = [
  { name: "Carrier", src: "/assets/teko-carrier.png" },
  { name: "Panasonic", src: "/assets/teko-panasonic.png" },
  { name: "Condura", src: "/assets/teko-condura.png" },
  { name: "Kolin", src: "/assets/teko-kolin.png" },
  { name: "Samsung", src: "/assets/teko-samsung.png" },
  { name: "LG", src: "/assets/teko-lg.png" },
  { name: "Daikin", src: "/assets/teko-daikin.png" },
  { name: "Fujidenzo", src: "/assets/teko-fujidenzo.jpg" },
  { name: "Koppel", src: "/assets/teko-koppel2.png" },
  { name: "Sharp", src: "/assets/teko-sharp.png" },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            All Brands Serviced
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Our technicians service all major aircon brands. No brand left behind.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-14 w-28 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 p-3 transition hover:border-primary-200 hover:bg-primary-50/30 hover:shadow-md sm:h-16 sm:w-32"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={48}
                className="h-8 w-auto object-contain object-center sm:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
