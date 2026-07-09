import {
  FileText,
  Brain,
  Settings
} from "lucide-react";


function Sidebar() {

  return (

    <aside
      className="
        hidden
        md:flex
        h-screen
        w-72
        flex-col
        border-r
        border-white/10
        bg-black
        p-6
      "
    >


      {/* Logo */}

      <div className="flex items-center gap-3">

        <div className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-red-500/10
          border
          border-red-500/20
        ">

          🧠

        </div>


        <span className="
          text-xl
          font-bold
          text-white
        ">
          DocMind <span className="text-red-500">
            AI
          </span>
        </span>

      </div>



      {/* Navigation */}

      <nav className="
        mt-12
        flex
        flex-col
        gap-3
      ">


        <a
          className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-red-500/10
          px-4
          py-3
          text-red-400
          "
        >

          <FileText size={20}/>

          Documents

        </a>



        <a
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-slate-400
          transition
          hover:bg-white/5
          hover:text-white
          "
        >

          <Brain size={20}/>

          Agent IA

        </a>



        <a
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-slate-400
          transition
          hover:bg-white/5
          hover:text-white
          "
        >

          <Settings size={20}/>

          Paramètres

        </a>


      </nav>


    </aside>

  );
}


export default Sidebar;