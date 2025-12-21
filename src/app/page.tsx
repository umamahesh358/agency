import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Team from "@/components/Team";
import VideoTestimonials from "@/components/VideoTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CinematicLoader from "@/components/CinematicLoader";

export default function Home() {
  return (
    <>
      {/* Quick brand flash */}
      <CinematicLoader />

      <main className="relative min-h-screen bg-[#050505]">
        {/* Simple static background - no animation */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Subtle vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <TrustStrip />
          <Services />
          <Portfolio />
          <VideoTestimonials />
          <About />
          <Team />
          <Process />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
