import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-page-bg overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
