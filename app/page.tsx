import CardWithText from "@/components/Cards/CardWithText";
import CarouselCards from "@/components/Cards/CarouselCards";
import HeroForLandingPage from "@/components/HeroSection/HeroForLandingPage";
import NavbarForLandingPage from "@/components/Navbar/NavbarForLandingPage";
import TabImages from "@/components/TabImages/TabImages";
import PromoBanner from "@/components/PromoBanner/PromoBanner";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <div className="bg-white">
      <NavbarForLandingPage />
      <HeroForLandingPage />
      <CarouselCards />
      <TabImages />
      <PromoBanner />
      <CardWithText />
      <FAQ />
      <Footer />
    </div>
  );
}
