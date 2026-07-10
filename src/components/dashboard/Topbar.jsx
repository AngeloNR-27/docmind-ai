

import { Menu } from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-black px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg sm:text-xl font-semibold text-white truncate max-w-[200px] sm:max-w-none">
          Analyse documentaire
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-red-500 flex-shrink-0" />
      </div>
    </header>
  );
}

export default Topbar;