import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import ValueProposition from "./components/sections/ValueProposition";
import PagesShowcase from "./components/sections/PagesShowcase";
import VideoIntroduction from "./components/sections/VideoIntroduction";
import ResponsiveShowcase from "./components/sections/ResponsiveShowcase";
import RTLShowcase from "./components/sections/RTLShowcase";
import Technologies from "./components/sections/Technologies";
import BrandCategories from "./components/sections/BrandCategories";
import PagesGallery from "./components/sections/PagesGallery";
import BeforeAfter from "./components/sections/BeforeAfter";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <PagesShowcase />
        <VideoIntroduction />
        <ResponsiveShowcase />
        <RTLShowcase />
        <Technologies />
        <BrandCategories />
        <PagesGallery />
        <BeforeAfter />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
