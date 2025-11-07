"use client";

export default function HeroSection() {
  return (
    <div className="relative bg-[#2d2d3a] rounded-lg overflow-hidden mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop)' 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 min-h-[400px]">
        <div className="flex-1 z-10 mb-8 lg:mb-0">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Discover my Amazing<br />
            Art Space!
          </h1>
          <div className="mb-6">
            <code className="text-gray-300 bg-black/30 px-3 py-1 rounded text-sm">
              <span className="text-[#ffc107]">&lt;code&gt;</span> I build <span className="text-[#ffc107]">&lt;/code&gt;</span>
            </code>
          </div>
          <button className="bg-[#ffc107] hover:bg-[#ffb300] text-black font-bold py-3 px-8 rounded transition-colors">
            EXPLORE NOW
          </button>
        </div>
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
            alt="Profile" 
            className="w-64 h-80 object-cover object-top"
          />
        </div>
      </div>

      {/* Menu Icon */}
      <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}
