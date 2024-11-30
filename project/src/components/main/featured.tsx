import { Play } from 'lucide-react';

export function Featured() {
  const featuredPlaylists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPlaylists.map((playlist) => (
          <div
            key={playlist.title}
            className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors group"
          >
            <div className="relative">
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Play size={24} className="text-black ml-1" />
              </button>
            </div>
            <h3 className="font-bold mb-1">{playlist.title}</h3>
            <p className="text-sm text-gray-400">{playlist.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}