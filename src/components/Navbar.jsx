import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 transition-all duration-300 group-hover:bg-red-500/20 group-hover:border-red-500/40">
            <Sparkles className="h-5 w-5 text-red-500 transition-transform duration-300 group-hover:rotate-12" />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            DocMind <span className="text-red-500">AI</span>
          </span>
        </div>


        <div className="hidden items-center gap-8 md:flex">

          <a 
            href="#features"
            className="text-sm font-medium text-slate-400 transition duration-300 hover:text-white"
          >
            Fonctionnalités
          </a>

          <a 
            href="#how"
            className="text-sm font-medium text-slate-400 transition duration-300 hover:text-white"
          >
            Comment ça marche
          </a>

        </div>


        <button
          className="
          rounded-full 
          bg-red-600 
          px-6 
          py-2.5 
          text-sm 
          font-semibold 
          text-white
          shadow-lg
          shadow-red-600/20
          transition
          duration-300
          hover:bg-red-500
          hover:shadow-red-500/40
          hover:-translate-y-0.5
          active:translate-y-0
          "
        >
          Essayer gratuitement
        </button>


      </div>

    </nav>
  );
}

export default Navbar;