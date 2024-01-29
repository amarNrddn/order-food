import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeMenu />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
