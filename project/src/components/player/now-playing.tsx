import { Volume2, SkipBack, SkipForward, Play, Repeat, Shuffle } from 'lucide-react';

export function NowPlaying() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4 border-t border-gray-800">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
            alt="Album cover"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="text-sm font-semibold">Song Title</h4>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Play size={20} className="text-black ml-1" />
            </button>
            <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <Repeat size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}