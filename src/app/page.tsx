"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-16 space-y-8 transform transition-all duration-300 hover:shadow-3xl">
          
          {/* Header Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Hello World!
              </h1>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Welcome to the Future
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience modern web development with Next.js, TypeScript, and Tailwind CSS. 
              This is your starting point for building amazing applications.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-200/30 hover:border-blue-300/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">Built with Next.js 15 for optimal performance</p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Beautiful Design</h3>
              <p className="text-gray-600 text-sm">Styled with Tailwind CSS and modern aesthetics</p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl border border-pink-200/30 hover:border-pink-300/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Launch</h3>
              <p className="text-gray-600 text-sm">Production-ready with TypeScript support</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <span>Built with</span>
              <span className="font-semibold text-blue-600">Next.js</span>
              <span>•</span>
              <span className="font-semibold text-purple-600">TypeScript</span>
              <span>•</span>
              <span className="font-semibold text-pink-600">Tailwind CSS</span>
            </div>
            <p className="text-gray-400 text-xs mt-2">Start building something amazing today!</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce delay-75"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-bounce delay-150"></div>
        <div className="absolute top-1/2 left-4 w-12 h-12 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-300"></div>
      </div>
    </div>
  );
}