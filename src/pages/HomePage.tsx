import {
  Navigation,
  Hero,
  InAction,
  WhyItMatters,
  HowItWorks,
  Industries,
  Security,
  FAQ,
  Footer,
} from "@/components";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <InAction />
      <WhyItMatters />
      <HowItWorks />
      <Industries />
      <Security />
      {/*<VoiceDemo />*/}
      {/*<Features />*/}
      {/*<Languages />*/}
      {/*<Integrations />*/}
      {/*<Testimonials />*/}
      <FAQ />
      {/*<CTA />*/}
      {/*<Newsletter />*/}
      <Footer />
    </main>
  );
}
