import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Plan from "@/components/plan";
import WhatYouGet from "@/components/whatYouGet";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatYouGet />
      <Plan />
      <Footer />
    </main>
  );
}
