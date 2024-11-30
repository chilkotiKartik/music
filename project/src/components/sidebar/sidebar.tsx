import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <nav className="space-y-6">
        <div className="space-y-3">
          <NavItem icon={<Home size={24} />} label="Home" />
          <NavItem icon={<Search size={24} />} label="Search" />
          <NavItem icon={<Library size={24} />} label="Your Library" />
        </div>
        
        <div className="space-y-3">
          <NavItem icon={<Plus size={24} />} label="Create Playlist" />
          <NavItem icon={<Heart size={24} />} label="Liked Songs" />
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-400 mb-4">PLAYLISTS</p>
          <div className="space-y-2">
            {['My Playlist #1', 'Chill Vibes', 'Rock Classics', 'Workout Mix'].map((playlist) => (
              <p key={playlist} className="text-sm text-gray-400 hover:text-white cursor-pointer">
                {playlist}
              </p>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className={cn(
      "flex items-center gap-4 text-gray-400 hover:text-white transition-colors",
      "w-full text-left text-sm font-semibold"
    )}>
      {icon}
      {label}
    </button>
  );
}