import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyLocal } from './components/WhyLocal';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-vi-red selection:text-white cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyLocal />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;