"use client";

import PortfolioSidebar from './PortfolioSidebar';
import HeroSection from './HeroSection';
import StatsBar from './StatsBar';
import ServicesSection from './ServicesSection';
import PricingSection from './PricingSection';
import RecommendationsSection from './RecommendationsSection';

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-[#1a1a24] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <PortfolioSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12">
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <PricingSection />
        <RecommendationsSection />
        
        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">© 2023 All Rights Reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Email: admin@pixelthemes.com</p>
        </footer>
      </div>
    </div>
  );
}
