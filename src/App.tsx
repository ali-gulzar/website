import {
  Navigation,
  Hero,
  InAction,
  WhyItMatters,
  Features,
  HowItWorks,
  VoiceDemo,
  Integrations,
  Languages,
  Industries,
  Pricing,
  Testimonials,
  Security,
  FAQ,
  CTA,
  Newsletter,
  Footer,
} from "@/components";

function App() {
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
      {/*<Pricing />*/}
      <FAQ />
      {/*<CTA />*/}
      {/*<Newsletter />*/}
      <Footer />
    </main>
  );
}

export default App;


