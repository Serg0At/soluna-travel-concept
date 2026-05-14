import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Destinations } from "@/components/Destinations";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Contact pulled up to the #2 slot — visitors see the inquiry form
            almost immediately, before scrolling through marketing sections.
            Lead capture > exploration for this client. */}
        <Contact />
        <Services />
        <Destinations />
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
