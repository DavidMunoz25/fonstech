import { BrandDefs } from "@/components/brand";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Principles } from "@/components/Principles";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="site-root">
      <BrandDefs />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
