import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AirconTypes from "@/components/AirconTypes";
import MaintenancePlan from "@/components/MaintenancePlan";
import Brands from "@/components/Brands";
import BookSection from "@/components/BookSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AirconTypes />
      <MaintenancePlan />
      <Brands />
      <BookSection />
    </>
  );
}
