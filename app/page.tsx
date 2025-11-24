import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Faq from "@/components/sections/Faq";
import GymStatics from "@/components/sections/GymStatics";
import HeroSection from "@/components/sections/HeroSection";
import Plans from "@/components/sections/Plans";
import Reviews from "@/components/sections/Reviews";
import Trainers from "@/components/sections/Trainers";
import Training from "@/components/sections/Training";


export default function Home() {
  return (
   
    <div className="min-h-screen text-white">
      <Header />
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-700" />
              <main className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:px-10 lg:px-16">
                  <HeroSection />
                  <GymStatics />
                  <Training />
                  <Plans />
                  <Trainers />
                  <Reviews />
                  <Faq />
              </main>
        </div>
        <Footer />
    </div>
  );
}
