import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";


export default function Home() {
  return (
   
    <div>
      <Header />
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-700" />
              <main className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:px-10 lg:px-16">
                  <HeroSection />
              </main>
        </div>
    </div>
  );
}
