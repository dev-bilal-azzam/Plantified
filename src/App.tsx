import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const Features = React.lazy(() => import('./components/Features'));
const Footer = React.lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-green selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Features />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
