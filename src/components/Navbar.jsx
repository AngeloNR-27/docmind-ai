import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      
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


        <div className="hidden md:block">

          <Link
            to="/app"
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
          </Link>

        </div>


        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>


      <div className={`
        absolute left-0 right-0 top-full border-b border-white/5 bg-black/90 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}>

        <div className="flex flex-col gap-6 px-6 py-8">
          
          <a 
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 transition hover:text-red-400"
          >
            Fonctionnalités
          </a>


          <a 
            href="#how"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 transition hover:text-red-400"
          >
            Comment ça marche
          </a>


          <hr className="border-white/5 my-1" />


          <Link
            to="/app"
            onClick={() => setIsOpen(false)}
            className="
            w-full
            rounded-full 
            bg-red-600 
            px-3
            py-3 
            text-sm 
            font-semibold 
            text-white
            shadow-lg
            shadow-red-600/20
            transition
            duration-300
            hover:bg-red-500
            "
          >
            Essayer gratuitement
          </Link>


        </div>

      </div>

    </nav>
  );
}

export default Navbar;