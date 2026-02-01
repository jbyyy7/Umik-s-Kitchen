import React from "react";
import HeroSection from "@/components/home/hero-section";
import WhyUsSection from "@/components/home/why-us-section";
import FeaturedMenuSection from "@/components/home/featured-menu-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import LocationSection from "@/components/home/location-section";
import CTASection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhyUsSection />
      <FeaturedMenuSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
    </div>
  );
}
