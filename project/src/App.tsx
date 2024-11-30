import React from 'react';
import { Sidebar } from './components/sidebar/sidebar';
import { NowPlaying } from './components/player/now-playing';
import { Featured } from './components/main/featured';

function App() {
  return (
    <div className="h-screen bg-black text-white flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black pb-24">
        <div className="max-w-screen-xl mx-auto">
          <header className="bg-transparent sticky top-0 z-10 p-6">
            <nav className="flex justify-end gap-4">
              <button className="text-sm font-semibold hover:text-white text-gray-300">
                Sign up
              </button>
              <button className="bg-white text-black px-8 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Log in
              </button>
            </nav>
          </header>
          <Featured />
        </div>
      </main>
      <NowPlaying />
    </div>
  );
}

export default App;