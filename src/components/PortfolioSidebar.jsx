"use client";

export default function PortfolioSidebar() {
  return (
    <div className="w-full lg:w-80 bg-[#1e1e28] p-8 lg:min-h-screen lg:sticky lg:top-0">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-700">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Artur Carter</h2>
        <p className="text-gray-400 text-sm">Front-end Developer</p>
        <p className="text-gray-400 text-sm">UI/UX Designer</p>
      </div>

      {/* Info Section */}
      <div className="space-y-3 mb-8 pb-8 border-b border-gray-700">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Residence:</span>
          <span className="text-white">Canada</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">City:</span>
          <span className="text-white">Toronto</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Age:</span>
          <span className="text-white">26</span>
        </div>
      </div>

      {/* Language Proficiency */}
      <div className="flex gap-4 justify-center mb-8 pb-8 border-b border-gray-700">
        <div className="relative">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="#2d2d3a" strokeWidth="4" fill="none" />
            <circle 
              cx="32" 
              cy="32" 
              r="28" 
              stroke="#ffc107" 
              strokeWidth="4" 
              fill="none"
              strokeDasharray="176"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold">100%</span>
          </div>
          <p className="text-center text-white text-xs mt-2">French</p>
        </div>
        <div className="relative">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="#2d2d3a" strokeWidth="4" fill="none" />
            <circle 
              cx="32" 
              cy="32" 
              r="28" 
              stroke="#ffc107" 
              strokeWidth="4" 
              fill="none"
              strokeDasharray="176"
              strokeDashoffset="35.2"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold">80%</span>
          </div>
          <p className="text-center text-white text-xs mt-2">English</p>
        </div>
        <div className="relative">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="#2d2d3a" strokeWidth="4" fill="none" />
            <circle 
              cx="32" 
              cy="32" 
              r="28" 
              stroke="#ffc107" 
              strokeWidth="4" 
              fill="none"
              strokeDasharray="176"
              strokeDashoffset="52.8"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold">70%</span>
          </div>
          <p className="text-center text-white text-xs mt-2">Spanish</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">html</span>
            <span className="text-gray-400">90 %</span>
          </div>
          <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-[#ffc107] h-full" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">css</span>
            <span className="text-gray-400">85 %</span>
          </div>
          <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-[#ffc107] h-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">javascript</span>
            <span className="text-gray-400">95 %</span>
          </div>
          <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-[#ffc107] h-full" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white">react</span>
            <span className="text-gray-400">88 %</span>
          </div>
          <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-[#ffc107] h-full" style={{ width: '88%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
