import Image from "next/image";

const types = [
  { name: "Window Type", src: "/assets/aircon_type/window-type-aircon.png" },
  { name: "Split Type", src: "/assets/aircon_type/split-type-aircon.png" },
  { name: "Tower Type", src: "/assets/aircon_type/tower-type-aircon.png" },
  { name: "Cassette Type", src: "/assets/aircon_type/cassette-type-aircon.png" },
  { name: "Suspended Type", src: "/assets/aircon_type/suspended-type-aircon.png" },
  { name: "Concealed Type", src: "/assets/aircon_type/concealed-type-aircon.png" },
  { name: "U-shaped Window", src: "/assets/aircon_type/u-shape-type-aircon.png" },
];

export default function AirconTypes() {
  return (
    <section id="aircon-types" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Servicing All Aircon Brands and Types
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Our aircon technicians are expert in handling residential and light commercial types of all major brands including Carrier, Panasonic, Condura, Kolin, Samsung, and LG.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {types.map((type) => (
            <div
              key={type.name}
              className="group flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-center transition hover:border-primary-200 hover:bg-primary-50/30 hover:shadow-md"
            >
              <div className="relative h-16 w-full sm:h-20">
                <Image
                  src={type.src}
                  alt={type.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-slate-700 group-hover:text-primary-700">
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
